import { DOCUMENT } from '@angular/common';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  catchError,
  forkJoin,
  Observable,
  of,
  retry,
} from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class DataService {
  private httpOptions: any = {
    headers: new HttpHeaders()
      .set("content-type", "application/json")
      .set("Access-Control-Allow-Origin", "*"),
  };
  private backendUrl = "https://portfolio-tracker-backend-5ys2.onrender.com";
  public localStorage: Storage | undefined;
  public portfolioSymbols: any = [];
  public portfolioHoldings: any = {};
  public portfolioData: any = {};
  public portfolioTechnicalInsights: any = {};
  public portfolioDividendHistory: any = {};
  public isLoadingData = new BehaviorSubject(false);
  public hasPortfolioData = new BehaviorSubject(false);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient,
    private router: Router,
  ) {
    this.localStorage = this.document.defaultView?.localStorage;
    this.generatePortfolioDataFromLocalStorage();
  }

  get marketState(): string { 
    return this.portfolioDataArray[0].marketState;
  }

  get portfolioDataArray(): any[] { 
    return Object.values(this.portfolioData);
  }

  get portfolioHoldingsArray(): any[] { 
    return Object.values(this.portfolioHoldings);
  }

  get portfolioDividendHistoryArray(): any[] { 
    return Object.values(this.portfolioDividendHistory);
  }

  private error(error: HttpErrorResponse): Observable<any> {
    let errorMessage =
      error.error instanceof ErrorEvent
        ? error.error.message
        : `Error Code: ${error.status} Message: ${error.message}`;
    return of({ data: [], message: errorMessage, status: 500 });
  }

  public wrapHttpCall(path: string, options = this.httpOptions): Observable<any> {
    const call = this.http.get<any>(path, options);
    return call.pipe(retry<any>(2), catchError(this.error));
  }

  private sanityCheck() { 
    console.log(
      "%c ----- Sanity Check -----",
      "background: teal; color: white"
    );
    console.log("Symbols:", this.portfolioSymbols);
    console.log("Holdings:", this.portfolioSymbols.length);
    let thing = Object.keys(this.portfolioData).length === this.portfolioSymbols.length;
    console.log("Portfolio data length equal to symbols length:", thing);
    thing = Object.keys(this.portfolioTechnicalInsights).length === this.portfolioSymbols.length;
    console.log("Technical insights length equal to symbols.length:", thing);
    thing = this.portfolioDividendHistory != null;
    console.log("Dividend history data is not empty:", thing)
    console.log(
      "%c ------------------------",
      "background: teal; color: white"
    );
  }

  public getItem(item: string) {
    const data = this.localStorage?.getItem(item);
    return data ? JSON.parse(data) : null;
  }

  public setItem(itemName: string, item: any) {
    this.localStorage?.setItem(itemName, JSON.stringify(item));
  }

  public generatePortfolioDataFromLocalStorage() { 
    this.isLoadingData.next(true);
    const symbols = this.getItem('portfolioSymbols');
    const holdings = this.getItem('portfolioHoldings');
    const techInsights = this.getItem('portfolioTechInsights');

    if (!!symbols && !!holdings && !!techInsights) {
      this.portfolioSymbols = symbols;
      this.portfolioHoldings = holdings;
      this.portfolioTechnicalInsights = techInsights;

      symbols.forEach((symbol: any) => { 
        this.portfolioData[symbol] = this.getItem(symbol)
        this.portfolioDividendHistory[symbol] = this.getItem(symbol + 'DividendHistory')
      });
      this.hasPortfolioData.next(true);
    }
    this.isLoadingData.next(false);
    this.sanityCheck();
  }

  public generatePortfolioData(fileContent: string[]) {
    this.isLoadingData.next(true);

    this.setItem('fileContent', fileContent);

    this.portfolioHoldings.positionsHeld = 0;
    this.portfolioHoldings.marketValue = 0;
    this.portfolioHoldings.totalAmountInvested = 0;
    this.portfolioHoldings.dividendIncome = 0;
    this.portfolioHoldings.unrealizedGain = 0;
    this.portfolioHoldings.unrealizedGainPercent = 0;
    this.portfolioHoldings.yieldOnCost = 0;
    this.portfolioHoldings.yield = 0;

    fileContent.forEach((line) => {
      const [symbol, shares, costAverage] = line.split(",");
      const symbolHolding = {
        shares: +shares,
        costAverage: +costAverage,
      };
      this.portfolioSymbols.push(symbol);
      this.portfolioHoldings[symbol] = symbolHolding;
    });

    this.setItem('portfolioSymbols', this.portfolioSymbols);
    this.portfolioHoldings.positionsHeld = this.portfolioSymbols.length;

    forkJoin([
      this.getPortfolioData(),
      this.getPortfolioTechInsights(),
    ]).subscribe(([portfolioData, techInsights]) => {
      this.portfolioData = portfolioData;
      this.portfolioTechnicalInsights = techInsights;
      Object.entries(portfolioData).forEach(([symbol, stockData]) => {
        this.setItem(symbol, stockData);
      });
      this.setItem('portfolioTechInsights', techInsights);

      this.portfolioSymbols.forEach((symbol: string) => {
        const data = this.portfolioData[symbol];
        const holding = this.portfolioHoldings[symbol];
        const shares = holding.shares;
        const costAvg = holding.costAverage;
        holding.symbol = symbol;
        holding.totalCost = +(shares * costAvg).toFixed(2);
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
      });

      Object.values(this.portfolioHoldings)
        .filter((prop: any) => !!prop.symbol)
        .forEach((holding: any) => {
          holding.portfolioPercent = holding.marketValue / this.portfolioHoldings.marketValue;
          this.setItem(holding.symbol + "Holding", holding);
        });

      this.portfolioHoldings.unrealizedGainPercent = this.portfolioHoldings.unrealizedGain / this.portfolioHoldings.totalAmountInvested;
      this.portfolioHoldings.yield = this.portfolioHoldings.dividendIncome / this.portfolioHoldings.marketValue;
      this.portfolioHoldings.yieldOnCost = this.portfolioHoldings.dividendIncome / this.portfolioHoldings.totalAmountInvested;
      this.setItem("portfolioHoldings", this.portfolioHoldings);

      this.getPortfolioDividendHistory();
      this.isLoadingData.next(false);
      this.sanityCheck();
      if (this.portfolioSymbols.length > 0 &&
        Object.keys(this.portfolioData).length === this.portfolioSymbols.length &&
        Object.keys(this.portfolioTechnicalInsights).length === this.portfolioSymbols.length
      ) {
        this.router.navigateByUrl("/main");
      }
    });
  }

  refreshPortfolioData() {
    this.portfolioSymbols = [];
    this.portfolioHoldings = {};
    this.portfolioData = {};
    this.portfolioTechnicalInsights = {};
    this.portfolioDividendHistory = {};

    const fileContentCache = this.getItem('fileContent');
    this.localStorage?.clear();
    this.generatePortfolioData(fileContentCache);
  }

  public getHasPortfolioData(): boolean { 
    return this.hasPortfolioData.getValue();
  }

  /**
   * @param {string} symbol - Symbol of stock to retrieve data for
   * @returns {Observable} Stock data.
   */
  public getStockData(symbol: string): Observable<JSON> {
    const apiPath = `${this.backendUrl}/fetch/stock/${symbol}`;
    return this.wrapHttpCall(apiPath);
  }

  public getPortfolioData(): Observable<JSON> {
    const symbols = this.portfolioSymbols.join(":");
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

  public getPortfolioTechInsights(): Observable<JSON> {
    const symbols = this.portfolioSymbols.join(":");
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
   * @description Fetch portfolio dividend history
   * @returns
   */
  public getPortfolioDividendHistory() {
    this.portfolioSymbols.forEach((symbol: string) => {
      this.getDividendHistory(symbol, 10).subscribe((divHis: any) => {
        this.portfolioDividendHistory[symbol] = divHis;
        this.setItem(symbol + "DividendHistory", divHis);
      });
    });
    return
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
