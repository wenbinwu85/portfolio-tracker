import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
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
  private backendDataPath = "../../../backend/data";
  private backendUrl = "http://127.0.0.1:5000";
  public portfolioHoldings: any = {};
  public portfolioSymbols: any = [];
  public portfolioData: any = {};
  public portfolioTechnicalInsights: any = {};
  public portfolioDividendHistory: any = {};
  public isLoadingData = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    this.updatePortfolioData(true);
    this.updatePortfolioTechnicalInsights(true);
    this.updatePortfolioDividendHistory(true);
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

  /**
   * @description fetch stock data and update data, holdings, and symbols
   * @param {boolean} fromLocal - should load data from local or api, default: false
   */
  updatePortfolioData(fromLocal: boolean) {
    this.isLoadingData.next(true);
    forkJoin([
      this.getPortfolioHoldings(),
      this.getPortfolioData(fromLocal),
    ]).subscribe(([holdings, data]) => {
      this.portfolioData = data;
      this.portfolioHoldings = holdings;
      this.portfolioSymbols = Object.keys(this.portfolioData);

      this.isLoadingData.next(false);

      console.log(
        "%c ----- Sanity Check -----",
        "background: teal; color: white"
      );
      const thing = Object.keys(this.portfolioData).length === this.portfolioSymbols.length;
      console.log("data.length equal symbols.length:", thing);
      console.table(Object.entries(this.portfolioHoldings));
      console.log(
        "%c ------------------------",
        "background: teal; color: white"
      );
    });
  }

  /**
   * @description Fetch portfolio corporate events
   * @returns
   */
  updatePortfolioCorporateEvents() {
    this.isLoadingData.next(true);

    let counter = 0;
    Object.values(this.portfolioData)
      .filter((stock: any) => stock.quoteType === "EQUITY")
      .forEach((stock: any, _: any, arr: any[]) => {
        this.getCorporateEvents(stock.symbol).subscribe(() => {
          counter++;
          if (counter === arr.length) {
            this.isLoadingData.next(false);

            console.log(
              "%c ----- Sanity Check -----",
              "background: teal; color: white"
            );
            console.log(
              "counter equal portfolio symbols length:",
              counter == this.portfolioSymbols.length
            );
            console.log(
              "%c ------------------------",
              "background: teal; color: white"
            );
          }
        });
      });
  }

  /**
   * @description Fetch portfolio technical insights
   * @returns {null}
   */
  updatePortfolioTechnicalInsights(fromLocal: boolean = true) {
    this.isLoadingData.next(true);

    this.portfolioSymbols.forEach((symbol: string) => {
      this.getTechnicalInsights(symbol, fromLocal).subscribe((data) => {
        this.portfolioTechnicalInsights[symbol] = data;
        if ( Object.keys(this.portfolioTechnicalInsights).length === this.portfolioSymbols.length) {
          this.isLoadingData.next(false);

          console.log(
            "%c ----- Sanity Check -----",
            "background: teal; color: white"
          );
          const thing = Object.keys(this.portfolioTechnicalInsights).length === this.portfolioSymbols.length;
          console.log("technicalInsights.length equal symbols.length:", thing);
          console.table(Object.entries(this.portfolioTechnicalInsights));
          console.log(
            "%c ------------------------",
            "background: teal; color: white"
          );
        };
      });
    });
  }

  /**
   * @description Fetch portfolio dividend history
   * @returns
   */
  updatePortfolioDividendHistory(fromLocal: boolean = true) {
    this.isLoadingData.next(true);
    this.portfolioSymbols.forEach((symbol: string) => {
      this.getDividendHistory(symbol, 10, fromLocal).subscribe((divHis: any) => {
        this.portfolioDividendHistory[symbol] = divHis;
        if (Object.keys(this.portfolioDividendHistory).length === this.portfolioSymbols.length) {
          this.isLoadingData.next(false);

          console.log(
            "%c ----- Sanity Check -----",
            "background: teal; color: white"
          );
          const thing = Object.keys(this.portfolioDividendHistory).length === this.portfolioSymbols.length;
          console.log("dividendHistory.length equal symbols.length:", thing);
          console.table(Object.entries(this.portfolioDividendHistory));
          console.log(
            "%c ------------------------",
            "background: teal; color: white"
          );
        };
      });
    });
  }

  /**
   * @returns {Observable} Portfolio holdings data.
   */
  public getPortfolioHoldings(): Observable<JSON> {
    const apiPath = `${this.backendUrl}/fetch/portfolio/holdings`;
    return this.wrapHttpCall(apiPath);
  }

  /**
   * @returns {Observable} Portfolio symbols.
   */
  public getPortfolioSymbols(): Observable<Array<string>> {
    const apiPath = `${this.backendUrl}/fetch/portfolio/symbols`;
    return this.wrapHttpCall(apiPath);
  }

  /**
   * @param {boolean} fromLocal - should load data from local or api, default: false
   * @returns {Observable} Portfolio stock data.
   */
  public getPortfolioData(fromLocal: boolean = false): Observable<JSON> {
    if (fromLocal) {
      const localPath = `${this.backendDataPath}/portfolio.json`;
      const options = { ...this.httpOptions, responseType: "json" };
      return this.wrapHttpCall(localPath, options);
    }
    const apiPath = `${this.backendUrl}/fetch/portfolio/data`;
    return this.wrapHttpCall(apiPath);
  }

  /**
   * @param {string} symbol - Symbol of stock to retrieve data for
   * @param {boolean} fromLocal - should load data from local or api, default: false
   * @returns {Observable} Stock data.
   */
  public getStockData(
    symbol: string,
    fromLocal: boolean = false
  ): Observable<JSON> {
    if (fromLocal) {
      const localPath = `${this.backendDataPath}/${symbol.toLowerCase()}.json`;
      const options = { ...this.httpOptions, responseType: "json" };
      return this.wrapHttpCall(localPath, options);
    }
    const apiPath = `${this.backendUrl}/fetch/stock/${symbol.toLowerCase()}`;
    return this.wrapHttpCall(apiPath);
  }

  /**
   * @param {string} symbol - symbol of stock to retrieve data for
   * @param {number} years - years of history to retrieve
   * @param {boolean} fromLocal - should load data from local or api, default: false
   * @returns {Observable} Dividend history.
   */
  public getDividendHistory(
    symbol: string,
    years = 10,
    fromLocal: boolean = false
  ): Observable<any> {
    if (fromLocal) {
      const localPath = `${this.backendDataPath
        }/${symbol.toLowerCase()}-dividend.json`;
      const localOptions = { ...this.httpOptions, responseType: "json" };
      return this.wrapHttpCall(localPath, localOptions);
    }
    const apiPath = `${this.backendUrl}/fetch/dividend-history/${symbol}`;
    const params = new HttpParams().set("years", years);
    const apiOptions = { ...this.httpOptions, params };
    return this.wrapHttpCall(apiPath, apiOptions);
  }

  /**
   * @param {string} symbol - Symbol of stock to retrieve data for
   * @param {boolean} fromLocal - should load data from local or api, default: false
   * @returns {Observable} Technical insights of a stock.
   */
  public getTechnicalInsights(
    symbol: string,
    fromLocal: boolean = false
  ): Observable<JSON> {
    if (fromLocal) {
      const localPath = `${this.backendDataPath
        }/${symbol.toLowerCase()}-technical-insights.json`;
      const options = { ...this.httpOptions, responseType: "json" };
      return this.wrapHttpCall(localPath, options);
    }
    const apiPath = `${this.backendUrl}/fetch/technical-insights/${symbol}`;
    return this.wrapHttpCall(apiPath);
  }

  /**
   * @param {string} symbol - Symbol of stock to retrieve data for
   * @param {boolean} fromLocal - Should load data from local or api, default: false
   * @returns {Observable} Corporate events of a stock.
   */
  public getCorporateEvents(
    symbol: string,
    fromLocal: boolean = false
  ): Observable<JSON> {
    if (fromLocal) {
      const localPath = `${this.backendDataPath
        }/${symbol.toLowerCase()}-events.json`;
      const options = { ...this.httpOptions, responseType: "json" };
      return this.wrapHttpCall(localPath, options);
    }
    const apiPath = `${this.backendUrl}/fetch/events/${symbol}`;
    return this.wrapHttpCall(apiPath);
  }
}
