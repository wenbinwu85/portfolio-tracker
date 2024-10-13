import { DOCUMENT } from "@angular/common";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  BehaviorSubject,
  catchError,
  forkJoin,
  Observable,
  of,
  retry,
  take,
} from "rxjs";
import { MarketStates } from "../model/data-enums.model";
import { FirebaseService } from "./firebase.service";

@Injectable({
  providedIn: "root",
})
export class DataService {
  // private backendUrl = 'http://127.0.0.1:5000';
  private backendUrl = "https://portfolio-tracker-backend-5ys2.onrender.com";
  private httpOptions: any = {
    headers: new HttpHeaders()
      .set("content-type", "application/json")
      .set("Access-Control-Allow-Origin", "*"),
  };
  public localStorage: Storage;
  public portfolioSymbols: any = [];  // TODO: change to set?
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
    private firebaseService: FirebaseService
  ) {
    this.localStorage = this.document.defaultView!.localStorage;
    this.generatePortfolioDataFromLocalStorage();
  }

  get HasPortfolioData(): boolean {
    return this.hasPortfolioData.getValue();
  }

  get portfolioDataArray(): any[] {
    return Object.values(this.portfolioData);
  }

  get portfolioHoldingsArray(): any[] {
    return Object.values(this.portfolioHoldings);
  }

  get portfolioTechnicalInsightsArray(): any[] {
    return Object.values(this.portfolioTechnicalInsights);
  }

  get portfolioDividendHistoryArray(): any[] {
    return Object.values(this.portfolioDividendHistory);
  }

  get portfolioStocks(): any[] {
    return this.portfolioDataArray.filter(
      (stock: any) => stock.quoteType === "EQUITY"
    );
  }

  get portfolioEtfs(): any[] {
    return this.portfolioDataArray.filter(
      (stock: any) => stock.quoteType === "ETF"
    );
  }

  get portfolioDividendPayers(): any[] {
    return this.portfolioDataArray.filter(
      (stock: any) => stock.dividendRate?.raw > 0 || stock.dividendRate > 0
    );
  }

  get marketState(): MarketStates {
    return this.portfolioDataArray[0]?.marketState;
  }

  private error(error: HttpErrorResponse): Observable<any> {
    let errorMessage =
      error.error instanceof ErrorEvent
        ? error.error.message
        : `Error Code: ${error.status} Message: ${error.message}`;
    return of({ data: [], message: errorMessage, status: 500 });
  }

  public wrapHttpCall(
    path: string,
    options = this.httpOptions
  ): Observable<any> {
    const call = this.http.get<any>(path, options);
    return call.pipe(retry<any>(2), catchError(this.error));
  }

  public sanityCheck() {
    console.log(
      "%c ----- Sanity Check -----",
      "background: steelblue; color: white"
    );
    const check1 =
      this.portfolioSymbols.length > 0 &&
      this.portfolioSymbols.length === this.portfolioDataArray.length;
    const check2 =
      this.portfolioHoldingsArray.length === this.portfolioSymbols.length + 8;
    const check3 =
      this.portfolioTechnicalInsightsArray.length ===
      this.portfolioSymbols.length;
    const check4 = this.portfolioDividendHistory != null;
    console.log("Symbols:", this.portfolioSymbols);
    console.log("Holdings:", this.portfolioSymbols.length);
    console.log("Portfolio data length = number of symbols:", check1);
    console.log("Holdings length is = number of symbols + 8:", check2);
    console.log("Technical insights length = number of symbols:", check3);
    console.log("Dividend history data is not empty:", check4);

    console.log(this.portfolioData);
    console.table(this.portfolioHoldings);
    console.log(this.portfolioTechnicalInsights);
    console.log(this.portfolioDividendHistory);

    if (check1 && check2 && check3) {
      console.log("%c Sanity Check Passed! ", "background: teal; color: white; line-height: 25px;");
      return true;
    } else {
      console.log("%c Sanity Check failed! ", "background: chocolate; color: white; line-height: 25px;");
      return false;
    }
  }

  public getItem(item: string) {
    const data = this.localStorage?.getItem(item);
    return data ? JSON.parse(data) : null;
  }

  public setItem(itemName: string, item: any) {
    this.localStorage?.setItem(itemName, JSON.stringify(item));
  }

  public removeItem(itemName: string) { 
    this.localStorage?.removeItem(itemName);
  }

  public getTickerData(symbol: string) {
    return this.portfolioData[symbol];
  }

  public getTickerHolding(symbol: string) {
    return this.portfolioHoldings[symbol];
  }

  public getTickerTechnicalInsights(symbol: string) {
    return this.portfolioTechnicalInsights[symbol];
  }

  public getTickerDividendHistory(symbol: string) {
    return this.getItem(symbol + "DividendHistory");
  }

  public generatePortfolioDataFromLocalStorage() {
    this.isLoadingData.next(true);
    const symbols = this.getItem("portfolioSymbols");
    const holdings = this.getItem("portfolioHoldings");
    const techInsights = this.getItem("portfolioTechInsights");

    if (!!symbols && !!holdings && !!techInsights) {
      this.portfolioSymbols = symbols;
      this.portfolioHoldings = holdings;
      this.portfolioTechnicalInsights = techInsights;

      symbols.forEach((symbol: any) => {
        this.portfolioData[symbol] = this.getItem(symbol);
        this.portfolioDividendHistory[symbol] = this.getItem(
          symbol + "DividendHistory"
        );
      });
      this.hasPortfolioData.next(true);
    }
    this.isLoadingData.next(false);
    this.sanityCheck();
  }

  public updatePortfolioData(symbols: string[], holdings: any[]) { 
    this.isLoadingData.next(true);
    this.portfolioHoldings.positionsHeld = 0;
    this.portfolioHoldings.marketValue = 0;
    this.portfolioHoldings.totalAmountInvested = 0;
    this.portfolioHoldings.dividendIncome = 0;
    this.portfolioHoldings.unrealizedGain = 0;
    this.portfolioHoldings.unrealizedGainPercent = 0;
    this.portfolioHoldings.yieldOnCost = 0;
    this.portfolioHoldings.yield = 0;
    holdings.forEach(holding => { 
      this.portfolioHoldings[holding.symbol] = {
        shares: holding.shares,
        costAverage: holding.costAverage,
      }
    });

    const addedSymbols = symbols.filter((symbol: string) => !this.portfolioSymbols.includes(symbol));
    const deletedSymbols = this.portfolioSymbols.filter((existingSymbol: string) => !symbols.includes(existingSymbol));
    this.portfolioSymbols = symbols;
    this.portfolioHoldings.positionsHeld = this.portfolioSymbols.length;

    console.log('symbols:', symbols)
    console.log('this.symbols:', this.portfolioSymbols)
    console.log('added symbols:', addedSymbols)
    console.log('deleted symbols:', deletedSymbols)

    deletedSymbols.forEach((symbol: string) => {
      delete this.portfolioHoldings[symbol];
      delete this.portfolioData[symbol];
      delete this.portfolioTechnicalInsights[symbol];
      delete this.portfolioDividendHistory[symbol];
      this.removeItem(symbol + 'Holding');
      this.removeItem(symbol);
      this.removeItem(symbol + 'DividendHistory');
    });
    this.setItem('portfolioSymbols', this.portfolioSymbols);
    this.setItem('portfolioHolding', this.portfolioHoldings);
    this.setItem('portfolioTechInsights', this.portfolioTechnicalInsights);

    if (!addedSymbols.length) { 
      this.portfolioSymbols.forEach((symbol: string) => {
        const data = this.portfolioData[symbol];
        const holding = this.portfolioHoldings[symbol];
        const shares = holding.shares;
        const costAvg = holding.costAverage;
        holding.symbol = symbol;
        holding.totalCost = +(shares * costAvg).toFixed(2);
        holding.marketValue = data.regularMarketPrice.raw * shares;
        holding.unrealizedGain = holding.marketValue - holding.totalCost;
        holding.unrealizedGainPercent =
          holding.unrealizedGain / holding.totalCost;
        holding.dividendIncome =
          data.dividendRate?.raw * shares || data.dividendRate * shares || 0;
        holding.yieldOnCost = holding.dividendIncome / holding.totalCost;
        this.portfolioHoldings.marketValue += holding.marketValue;
        this.portfolioHoldings.totalAmountInvested += holding.totalCost;
        this.portfolioHoldings.unrealizedGain += holding.unrealizedGain;
        this.portfolioHoldings.dividendIncome += holding.dividendIncome;
        this.portfolioHoldings[symbol] = holding;

        const holdingData: any = {};
        const key = symbol;
        holdingData[key] = holding;
        // this.firebaseService.updateDocument('holdings', holdingData);
      });

      this.portfolioHoldingsArray
        .filter((prop: any) => !!prop.symbol)
        .forEach((holding: any) => {
          holding.portfolioPercent =
            holding.marketValue / this.portfolioHoldings.marketValue;
          this.setItem(holding.symbol + "Holding", holding);
        });

      this.portfolioHoldings.unrealizedGainPercent =
        this.portfolioHoldings.unrealizedGain /
        this.portfolioHoldings.totalAmountInvested;
      this.portfolioHoldings.yield =
        this.portfolioHoldings.dividendIncome /
        this.portfolioHoldings.marketValue;
      this.portfolioHoldings.yieldOnCost =
        this.portfolioHoldings.dividendIncome /
        this.portfolioHoldings.totalAmountInvested;
      this.setItem("portfolioHoldings", this.portfolioHoldings);

      this.isLoadingData.next(false);
      this.hasPortfolioData.next(true);
      if (!!this.sanityCheck()) {
        this.router.navigateByUrl("/");
      }
      return;
    }

    const fetchNewSymbolsData$ = () => {
      const param = addedSymbols.length === 1 ? addedSymbols[0] : addedSymbols.join(':');
      const apiPath = `${this.backendUrl}/fetch/portfolio/${param}`;
      return this.wrapHttpCall(apiPath) as Observable<JSON>;
    }

    const fetchNewSymbolsTechInsights$ = () => {
      const param = addedSymbols.length === 1 ? addedSymbols[0] : addedSymbols.join(':');
      const apiPath = `${this.backendUrl}/fetch/portfolio/technical-insights/${param}`;
      return this.wrapHttpCall(apiPath) as Observable<JSON>;
    }

    forkJoin([
      fetchNewSymbolsData$(),
      fetchNewSymbolsTechInsights$(),
    ]).subscribe(([newData, newTechInsights]) => {
      this.portfolioData = {
        ...this.portfolioData,
        ...newData,
      }
      this.portfolioTechnicalInsights = {
        ...this.portfolioTechnicalInsights,
        ...newTechInsights,
      }
      this.setItem("portfolioTechInsights", this.portfolioTechnicalInsights);

      Object.entries(newData).forEach(([symbol, stockData]) => {
        this.setItem(symbol, stockData);
        // this.firebaseService.setDocument(symbol, stockData);
      });
      Object.entries(newTechInsights).forEach(([symbol, techInsight]) => {
        console.log(symbol)
        console.log(techInsight)
        // this.firebaseService.setDocument(symbol + 'TechnicalInsight', techInsight);
      });

      this.portfolioSymbols.forEach((symbol: string) => {
        const data = this.portfolioData[symbol];
        const holding = this.portfolioHoldings[symbol];
        const shares = holding.shares;
        const costAvg = holding.costAverage;
        holding.symbol = symbol;
        holding.totalCost = +(shares * costAvg).toFixed(2);
        holding.marketValue = data.regularMarketPrice?.raw * shares;
        holding.unrealizedGain = holding.marketValue - holding.totalCost;
        holding.unrealizedGainPercent =
          holding.unrealizedGain / holding.totalCost;
        holding.dividendIncome =
          data.dividendRate?.raw * shares || data.dividendRate * shares || 0;
        holding.yieldOnCost = holding.dividendIncome / holding.totalCost;
        this.portfolioHoldings.marketValue += holding.marketValue;
        this.portfolioHoldings.totalAmountInvested += holding.totalCost;
        this.portfolioHoldings.unrealizedGain += holding.unrealizedGain;
        this.portfolioHoldings.dividendIncome += holding.dividendIncome;
        this.portfolioHoldings[symbol] = holding;

        const holdingData: any = {};
        const key = symbol;
        holdingData[key] = holding;
        // this.firebaseService.updateDocument('holdings', holdingData);
      });

      this.portfolioHoldingsArray
        .filter((prop: any) => !!prop.symbol)
        .forEach((holding: any) => {
          holding.portfolioPercent =
            holding.marketValue / this.portfolioHoldings.marketValue;
          this.setItem(holding.symbol + "Holding", holding);
        });
      
      this.portfolioHoldings.unrealizedGainPercent =
        this.portfolioHoldings.unrealizedGain /
        this.portfolioHoldings.totalAmountInvested;
      this.portfolioHoldings.yield =
        this.portfolioHoldings.dividendIncome /
        this.portfolioHoldings.marketValue;
      this.portfolioHoldings.yieldOnCost =
        this.portfolioHoldings.dividendIncome /
        this.portfolioHoldings.totalAmountInvested;
      this.setItem("portfolioHoldings", this.portfolioHoldings);

      this.fetchPortfolioDividendHistory();
      this.isLoadingData.next(false);
      this.hasPortfolioData.next(true);
      if (!!this.sanityCheck()) {
        this.router.navigateByUrl("/main");
      }
    });
  }

  public generatePortfolioData(fileContent: string[]) {
    this.isLoadingData.next(true);
    this.setItem("fileContent", fileContent);
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

    this.setItem("portfolioSymbols", this.portfolioSymbols);
    this.portfolioHoldings.positionsHeld = this.portfolioSymbols.length;

    forkJoin([
      this.fetchPortfolioData(),
      this.fetchPortfolioTechnicalInsights(),
    ]).subscribe(([portfolioData, techInsights]) => {
      this.portfolioData = portfolioData;
      this.portfolioTechnicalInsights = techInsights;
      this.setItem("portfolioTechInsights", techInsights);
      Object.entries(portfolioData).forEach(([symbol, stockData]) => {
        this.setItem(symbol, stockData);
        // this.firebaseService.setDocument(symbol, stockData);
      });
      Object.entries(techInsights).forEach(([symbol, techInsight]) => {
        console.log(symbol)
        console.log(techInsight)
        // this.firebaseService.setDocument(symbol + 'TechnicalInsight', techInsight);
      });

      this.portfolioSymbols.forEach((symbol: string) => {
        const data = this.portfolioData[symbol];
        const holding = this.portfolioHoldings[symbol];
        const shares = holding.shares;
        const costAvg = holding.costAverage;
        holding.symbol = symbol;
        holding.totalCost = +(shares * costAvg).toFixed(2);
        holding.marketValue = data.regularMarketPrice.raw * shares;
        holding.unrealizedGain = holding.marketValue - holding.totalCost;
        holding.unrealizedGainPercent =
          holding.unrealizedGain / holding.totalCost;
        holding.dividendIncome =
          data.dividendRate?.raw * shares || data.dividendRate * shares || 0;
        holding.yieldOnCost = holding.dividendIncome / holding.totalCost;
        this.portfolioHoldings.marketValue += holding.marketValue;
        this.portfolioHoldings.totalAmountInvested += holding.totalCost;
        this.portfolioHoldings.unrealizedGain += holding.unrealizedGain;
        this.portfolioHoldings.dividendIncome += holding.dividendIncome;
        this.portfolioHoldings[symbol] = holding;

        const holdingData: any = {};
        const key = symbol;
        holdingData[key] = holding;
        // this.firebaseService.updateDocument('holdings', holdingData);
      });

      this.portfolioHoldingsArray
        .filter((prop: any) => !!prop.symbol)
        .forEach((holding: any) => {
          holding.portfolioPercent =
            holding.marketValue / this.portfolioHoldings.marketValue;
          this.setItem(holding.symbol + "Holding", holding);
        });

      this.portfolioHoldings.unrealizedGainPercent =
        this.portfolioHoldings.unrealizedGain /
        this.portfolioHoldings.totalAmountInvested;
      this.portfolioHoldings.yield =
        this.portfolioHoldings.dividendIncome /
        this.portfolioHoldings.marketValue;
      this.portfolioHoldings.yieldOnCost =
        this.portfolioHoldings.dividendIncome /
        this.portfolioHoldings.totalAmountInvested;
      this.setItem("portfolioHoldings", this.portfolioHoldings);

      this.fetchPortfolioDividendHistory();
      this.isLoadingData.next(false);
      this.hasPortfolioData.next(true);
      if (!!this.sanityCheck()) {
        this.router.navigateByUrl("/main");
      }
    });
  }

  public refreshPortfolioData() {
    this.portfolioSymbols = [];
    this.portfolioHoldings = {};
    this.portfolioData = {};
    this.portfolioTechnicalInsights = {};
    this.portfolioDividendHistory = {};

    const fileContentCache = this.getItem("fileContent");
    this.localStorage?.clear();
    this.generatePortfolioData(fileContentCache);
  }

  /**
   * @param {string} symbol - Symbol of stock to retrieve data for
   * @returns {Observable} Stock data.
   */
  public fetchTickerData(symbol: string): Observable<JSON> {
    const apiPath = `${this.backendUrl}/fetch/stock/${symbol}`;
    return this.wrapHttpCall(apiPath);
  }

  public fetchPortfolioData(): Observable<JSON> {
    const symbols = this.portfolioSymbols.join(":");
    const apiPath = `${this.backendUrl}/fetch/portfolio/${symbols}`;
    return this.wrapHttpCall(apiPath);
  }

  /**
   * @param {string} symbol - Symbol of stock to retrieve data for
   * @returns {Observable} Technical insights of a stock.
   */
  public fetchTickerTechnicalInsight(symbol: string): Observable<JSON> {
    const apiPath = `${this.backendUrl}/fetch/technical-insights/${symbol}`;
    return this.wrapHttpCall(apiPath);
  }

  public fetchPortfolioTechnicalInsights(): Observable<JSON> {
    const symbols = this.portfolioSymbols.join(":");
    const apiPath = `${this.backendUrl}/fetch/portfolio/technical-insights/${symbols}`;
    return this.wrapHttpCall(apiPath);
  }

  /**
   * @param {string} symbol - symbol of stock to retrieve data for
   * @param {number} years - years of history to retrieve
   * @returns {Observable} Dividend history.
   */
  public fetchTickerDividendHistory(
    symbol: string,
    years = 10
  ): Observable<any> {
    const apiPath = `${this.backendUrl}/fetch/dividend-history/${symbol}`;
    const params = new HttpParams().set("years", years);
    const apiOptions = { ...this.httpOptions, params };
    return this.wrapHttpCall(apiPath, apiOptions);
  }

  /**
   * @description Fetch portfolio dividend history
   * @returns
   */
  public fetchPortfolioDividendHistory() {
    this.isLoadingData.next(true);
    this.portfolioSymbols.forEach((symbol: string) => {
      this.fetchTickerDividendHistory(symbol, 10)
        .pipe(take(1))
        .subscribe((divHis: any) => {
          this.portfolioDividendHistory[symbol] = divHis;
          this.setItem(symbol + "DividendHistory", divHis);
          if (divHis.length) { 
            // this.firebaseService.setDocument(symbol + "DividendHistory", divHis);
          }
        });
      if (
        this.portfolioDividendHistoryArray.length ===
        this.portfolioDividendPayers.length
      ) {
        this.isLoadingData.next(false);
      }
    });
    return;
  }

  /**
   * @param {string} symbol - Symbol of stock to retrieve data for
   * @returns {Observable} Corporate events of a stock.
   */
  public fetchTickerCorporateEvents(symbol: string): Observable<JSON> {
    const apiPath = `${this.backendUrl}/fetch/events/${symbol}`;
    return this.wrapHttpCall(apiPath);
  }

  /**
   * @description Fetch portfolio corporate events
   * @returns
   */
  fetchPortfolioCorporateEvents() {
    this.isLoadingData.next(true);

    let counter = 0;
    this.portfolioStocks.forEach((stock: any, _: any, arr: any[]) => {
      this.fetchTickerCorporateEvents(stock.symbol)
        .pipe(take(1))
        .subscribe(() => {
          counter++;
          if (counter === arr.length) {
            this.isLoadingData.next(false);

            console.log(
              "%c ----- Sanity Check -----",
              "background: teal; color: white"
            );
            console.log(
              "counter equal portfolio symbols length:",
              counter == this.portfolioStocks.length
            );
            console.log(
              "%c ------------------------",
              "background: teal; color: white"
            );
          }
        });
    });
  }
}
