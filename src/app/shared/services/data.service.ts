import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, forkJoin, Observable, of, retry } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private httpOptions: any = {
    headers: new HttpHeaders()
      .set("content-type", "application/json")
      .set("Access-Control-Allow-Origin", "*"),
  };
  private backendDataPath = "../../../backend/data/";
  private backendUrl = "http://127.0.0.1:5000";
  public portfolioHoldings: any;
  public portfolioSymbols: any;
  public portfolioData: any;

  constructor(private http: HttpClient) {
    forkJoin([
      this.getPortfolioHoldings(),
      this.getPortfolioSymbols(),
      this.getPortfolioData(false),
    ]).subscribe(([holdings, symbols, portfolioData]) => {
      this.portfolioHoldings = holdings;
      this.portfolioSymbols = symbols;
      this.portfolioData = portfolioData;
      this.portfolioHoldings.portfolioPositions = symbols.length;
      this.portfolioHoldings.portfolioMarketValue = 0;
      this.portfolioHoldings.portfolioTotalInvestment = 0;

      symbols.forEach(symbol => {
        const position = this.portfolioHoldings[symbol];
        const stock = this.portfolioData[symbol]
        const price = stock.price?.regularMarketPrice;
        position.marketValue = +(price * position.sharesOwned).toFixed(4);
        position.unrealizedGain = +(position.marketValue - position.totalCost).toFixed(4);
        position.unrealizedGainPercent = position.unrealizedGain / position.marketValue;
        const isETF = stock.price?.quoteType === 'ETF'
        const dividendAmount = isETF ? stock.summaryDetail?.yield * stock.price?.regularMarketPrice : stock.summaryDetail?.dividendRate;
        position.dividendIncome = dividendAmount * position.sharesOwned || 0;
        position.yieldOnCost = position.dividendIncome / position.totalCost;

        this.portfolioHoldings.portfolioMarketValue += position.marketValue;
        this.portfolioHoldings.portfolioTotalInvestment += position.totalCost;
        this.portfolioHoldings.portfolioDividendIncome += position.dividendIncome;
      })

      this.portfolioHoldings.portfolioUnrealizedGain = this.portfolioHoldings.portfolioMarketValue - this.portfolioHoldings.portfolioTotalInvestment;
      this.portfolioHoldings.portfolioYieldOnCost = this.portfolioHoldings.portfolioDividendIncome / this.portfolioHoldings.portfolioTotalInvestment;

      // this.getStocksData(this.portfolioSymbols, true).subscribe(console.log)
      console.table(this.portfolioHoldings)
    })
  }

  private error(error: HttpErrorResponse): Observable<any> {
    let errorMessage =
      error.error instanceof ErrorEvent
        ? error.error.message
        : `Error Code: ${error.status} Message: ${error.message}`;
    return of({ data: [], message: errorMessage, status: 500 });
  }

  /**
   * @param {string} path of api call
   * @param {null | boolean} options for http call
   * @returns {Observable} Returns http call response
   */
  private wrapHttpCall(
    path: string,
    options = this.httpOptions
  ): Observable<any> {
    const call = this.http.get<any>(path, options);
    return call.pipe(retry<any>(2), catchError(this.error));
  }

  /**
   * @returns {Observable} Returns portfolio holdings data.
   */
  public getPortfolioHoldings(): Observable<JSON> {
    const path = `${this.backendUrl}/fetch/holdings`;
    return this.wrapHttpCall(path);
  }

  /**
   * @returns {Observable} Returns portfolio symbols.
   */
  public getPortfolioSymbols(): Observable<Array<string>> {
    const path = `${this.backendUrl}/fetch/portfolio/symbols`;
    return this.wrapHttpCall(path);
  }

  /**
   * @param {null | boolean} update stock data from api call
   * @returns {Observable} Returns entire portfolio stock data.
   */
  public getPortfolioData(update: null | boolean): Observable<any> {
    const path = `${this.backendUrl}/fetch/portfolio/data`;
    if (update !== null) {
      let params = new HttpParams().set("update", String(update));
      const options = { ...this.httpOptions, params };
      return this.wrapHttpCall(path, options);
    }
    return this.wrapHttpCall(path);
  }

  /**
   * @param {string} symbol of stock to retrieve
   * @param {null | boolean} save stock data option
   * @returns {Observable} Returns a single stock data.
   */
  public getStockData(symbol: string, save: null | boolean): Observable<any> {
    const path = `${this.backendUrl}/fetch/stock/${symbol}`;
    if (save !== null) {
      let params = new HttpParams().set("save", String(save));
      const options = { ...this.httpOptions, params };
      return this.wrapHttpCall(path, options);
    }
    return this.wrapHttpCall(path);
  }

  /**
   * @param {Array} symbols of stock to retrieves
   * @param {null | boolean} save stock data option
   * @returns {Observable} Returns multiple stock data.
   */
  public getStocksData(
    symbols: string[],
    save: null | boolean
  ): Observable<JSON> {
    const path = `${this.backendUrl}/fetch/stocks/` + symbols.join(":");
    if (save !== null) {
      let params = new HttpParams().set("save", String(save));
      const options = { ...this.httpOptions, params };
      return this.wrapHttpCall(path, options);
    }
    return this.wrapHttpCall(path);
  }

  /**
   * @param {Array} symbol of stock to retrieves
   * @returns {Observable} load a single stock data from local backend data folder.
   */
  public loadStockDataFromDataFolder(symbol: string): Observable<JSON> {
    const path = `${this.backendDataPath}${symbol}.json`;
    const options = { ...this.httpOptions, responseType: "json" };
    return this.wrapHttpCall(path, options);
  }

  /**
   * @param {string} symbol of stock to retrieve
   * @param {number} years of history to retrieve
   * @returns {Observable} Returns a single stock dividend history.
   */
  getDividendHistory(symbol: string, years: number): Observable<JSON> {
    const path = `${this.backendUrl}/fetch/dividend-history/${symbol}/${years}`;
    return this.wrapHttpCall(path);
  }

  /**
   * @param {string} symbol of stock to retrieve
   * @returns {Observable} Returns technical insights of a stock.
   */
  getTechnicalInsights(symbol: string): Observable<JSON> {
    const path = `${this.backendUrl}/fetch/technical-insights/${symbol}`;
    return this.wrapHttpCall(path);
  }

  /**
   * @param {string} symbol of stock to retrieve
   * @returns {Observable} Returns recommendations of a stock.
   */
  getRecommendations(symbol: string): Observable<JSON> {
    const path = `${this.backendUrl}/fetch/recommendations/${symbol}`;
    return this.wrapHttpCall(path);
  }

  /**
   * @param {string} symbol of stock to retrieve
   * @returns {Observable} Returns corporate events of a stock.
   */
  getCorporateEvents(symbol: string): Observable<JSON> {
    const path = `${this.backendUrl}/fetch/events/${symbol}`;
    return this.wrapHttpCall(path);
  }
}
