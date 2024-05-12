import { DOCUMENT } from "@angular/common";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import {
  BehaviorSubject,
  catchError,
  forkJoin,
  Observable,
  of,
  retry,
} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private httpOptions: any = {
    headers: new HttpHeaders()
      .set("content-type", "application/json")
      .set("Access-Control-Allow-Origin", "*"),
  };
  private backendUrl = "http://127.0.0.1:5000";
  public localStorage: Storage | undefined;
  public portfolioHoldings: any = {};
  public portfolioSymbols: any = [];
  public portfolioData: any = {};
  public portfolioTechnicalInsights: any = {};
  public portfolioDividendHistory: any = {};
  public isLoadingData = new BehaviorSubject(false);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient
  ) {
    this.localStorage = this.document.defaultView?.localStorage;
    this.localStorage?.clear();
  }

  private error(error: HttpErrorResponse): Observable<any> {
    let errorMessage =
      error.error instanceof ErrorEvent
        ? error.error.message
        : `Error Code: ${error.status} Message: ${error.message}`;
    return of({ data: [], message: errorMessage, status: 500 });
  }

  /**
   * @param {string} path - Path of api call
   * @param {null | boolean} options - Options for http call
   * @returns {Observable} Http call observable
   */
  private wrapHttpCall(
    path: string,
    options = this.httpOptions
  ): Observable<any> {
    const call = this.http.get<any>(path, options);
    return call.pipe(retry<any>(2), catchError(this.error));
  }

  public fetchPortfolioData(fileContent: string[]) {
    this.isLoadingData.next(true);

    this.portfolioHoldings.positionsHeld = 0;
    this.portfolioHoldings.marketValue = 0;
    this.portfolioHoldings.totalAmountInvested = 0;
    this.portfolioHoldings.dividendIncome = 0;
    this.portfolioHoldings.unrealizedGain = 0;
    this.portfolioHoldings.unrealizedGainPercent = 0;
    this.portfolioHoldings.yieldOnCost = 0;
    this.portfolioHoldings.yield = 0;

    fileContent.forEach((line) => {
      const [symbol, shares, costAverage] = line.split(',');
      const symbolHolding = {
        shares: +shares,
        costAverage: +costAverage
      };
      this.portfolioSymbols.push(symbol);
      this.portfolioHoldings[symbol] = symbolHolding;
      this.localStorage?.setItem(symbol + 'Holding', JSON.stringify(symbolHolding));
    });

    this.portfolioHoldings.positionsHeld = this.portfolioSymbols.length;

    forkJoin([
      this.getPortfolioData(this.portfolioSymbols),
      this.getPortfolioTechInsights(this.portfolioSymbols),
    ]).subscribe(([data, techInsights]) => {
      this.portfolioData = data;
      this.portfolioTechnicalInsights = techInsights;

      Object.entries(this.portfolioData).forEach(([symbol, data]) => {
        this.localStorage?.setItem(symbol, JSON.stringify(data));
      });

      this.portfolioSymbols.forEach((symbol: string) => {
        let data = this.localStorage?.getItem(symbol) as any;
        data = JSON.parse(data);
        let holding = this.localStorage?.getItem(symbol + "Holding") as any;
        holding = JSON.parse(holding);

        const shares = holding.shares;
        const costAvg = holding.costAverage;
        holding.symbol = symbol;
        holding.totalCost = shares * costAvg;
        holding.marketValue = data.regularMarketPrice.raw * shares;
        holding.unrealizedGain = holding.marketValue - holding.totalCost;
        holding.unrealizedGainPercent = holding.unrealizedGain / holding.totalCost;
        holding.dividendIncome = data.dividendRate?.raw * shares || data.dividendRate * shares || 0;
        holding.yieldOnCost = holding.dividendIncome / holding.totalCost;
  
        this.portfolioHoldings.marketValue += holding.marketValue;
        this.portfolioHoldings.totalAmountInvested += holding.totalCost;
        this.portfolioHoldings.unrealizedGain += holding.unrealizedGain;
        this.portfolioHoldings.dividendIncome += holding.dividendIncome;
  
        this.portfolioHoldings[symbol] = holding;
        this.localStorage?.setItem(symbol + "Holding", JSON.stringify(holding));
      });
  
      Object.values(this.portfolioHoldings)
        .filter((prop: any) => !!prop.symbol)
        .forEach((holding: any) => {
          holding.portfolioPercent = holding.marketValue / this.portfolioHoldings.marketValue;
        });
  
      this.portfolioHoldings.unrealizedGainPercent = this.portfolioHoldings.unrealizedGain / this.portfolioHoldings.totalAmountInvested;
      this.portfolioHoldings.yield = this.portfolioHoldings.dividendIncome / this.portfolioHoldings.marketValue;
      this.portfolioHoldings.yieldOnCost = this.portfolioHoldings.dividendIncome / this.portfolioHoldings.totalAmountInvested;
      
      const portfolioHoldingsJson = JSON.stringify(this.portfolioHoldings);
      this.localStorage?.setItem('portfolioHoldings', portfolioHoldingsJson);
      this.isLoadingData.next(false);

      console.log(
        "%c ----- Sanity Check -----",
        "background: teal; color: white"
      );
      console.log('symbols:', this.portfolioSymbols)
      let thing = Object.keys(this.portfolioData).length === this.portfolioSymbols.length;
      console.log('portfolio data length equal to symbols length:', thing)
      thing = Object.keys(this.portfolioTechnicalInsights).length === this.portfolioSymbols.length;
      console.log("technical insights length equal to symbols.length:", thing);
      console.log(
        "%c ------------------------",
        "background: teal; color: white"
      );
    })
  }

  /**
   * @param {string} symbol - Symbol of stock to retrieve data for
   * @returns {Observable} Stock data.
   */
  public getStockData(symbol: string): Observable<JSON> {
    const apiPath = `${this.backendUrl}/fetch/stock/${symbol}`;
    return this.wrapHttpCall(apiPath);
  }

  public getPortfolioData(symbols: any): Observable<JSON> {
    symbols = symbols.join(':')
    const apiPath = `${this.backendUrl}/fetch/portfolio/${symbols}`;
    return this.wrapHttpCall(apiPath);
  }


  /**
   * @param {string} symbol - Symbol of stock to retrieve data for
   * @returns {Observable} Technical insights of a stock.
   */
  public getTechnicalInsights(symbol: string): Observable<JSON> {
    const apiPath = `${this.backendUrl}/fetch/technical-insights/${symbol}`;
    return this.wrapHttpCall(apiPath);
  }

  public getPortfolioTechInsights(symbols: any): Observable<JSON> {
    symbols = symbols.join(':')
    const apiPath = `${this.backendUrl}/fetch/portfolio/technical-insights/${symbols}`;
    return this.wrapHttpCall(apiPath);
  }

  /**
   * @param {string} symbol - symbol of stock to retrieve data for
   * @param {number} years - years of history to retrieve
   * @returns {Observable} Dividend history.
   */
  public getDividendHistory(symbol: string, years = 10): Observable<any> {
    const apiPath = `${this.backendUrl}/fetch/dividend-history/${symbol}`;
    const params = new HttpParams().set("years", years);
    const apiOptions = { ...this.httpOptions, params };
    return this.wrapHttpCall(apiPath, apiOptions);
  }

  /**
   * @param {string} symbol - Symbol of stock to retrieve data for
   * @returns {Observable} Corporate events of a stock.
   */
  public getCorporateEvents(symbol: string): Observable<JSON> {
    const apiPath = `${this.backendUrl}/fetch/events/${symbol}`;
    return this.wrapHttpCall(apiPath);
  }
}


  // ----------------------------------------------------------------


  /**
   * @description Fetch portfolio corporate events
   * @returns
   */
  // updatePortfolioCorporateEvents() {
  //   this.isLoadingData.next(true);

  //   let counter = 0;
  //   Object.values(this.portfolioData)
  //     .filter((stock: any) => stock.quoteType === "EQUITY")
  //     .forEach((stock: any, _: any, arr: any[]) => {
  //       this.getCorporateEvents(stock.symbol).subscribe(() => {
  //         counter++;
  //         if (counter === arr.length) {
  //           this.isLoadingData.next(false);

  //           console.log(
  //             "%c ----- Sanity Check -----",
  //             "background: teal; color: white"
  //           );
  //           console.log(
  //             "counter equal portfolio symbols length:",
  //             counter == this.portfolioSymbols.length
  //           );
  //           console.log(
  //             "%c ------------------------",
  //             "background: teal; color: white"
  //           );
  //         }
  //       });
  //     });
  // }


  /**
   * @description Fetch portfolio dividend history
   * @returns
   */
  // updatePortfolioDividendHistory() {
  //   this.isLoadingData.next(true);
  //   this.portfolioSymbols.forEach((symbol: string) => {
  //     this.getDividendHistory(symbol, 10).subscribe(
  //       (divHis: any) => {
  //         this.portfolioDividendHistory[symbol] = divHis;
  //         if (
  //           Object.keys(this.portfolioDividendHistory).length ===
  //           this.portfolioSymbols.length
  //         ) {
  //           const portfolioDividendJson = JSON.stringify(
  //             this.portfolioDividendHistory
  //           );
  //           this.localStorage?.setItem(
  //             "dividendHistory",
  //             portfolioDividendJson
  //           );

  //           this.isLoadingData.next(false);

  //           console.log(
  //             "%c ----- Sanity Check -----",
  //             "background: teal; color: white"
  //           );
  //           const thing =
  //             Object.keys(this.portfolioDividendHistory).length ===
  //             this.portfolioSymbols.length;
  //           console.log("dividendHistory.length equal symbols.length:", thing);
  //           console.table(Object.entries(this.portfolioDividendHistory));
  //           console.log(
  //             "%c ------------------------",
  //             "background: teal; color: white"
  //           );
  //         }
  //       }
  //     );
  //   });
  // }
