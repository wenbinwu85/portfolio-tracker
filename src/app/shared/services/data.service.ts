import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private httpOptions: any = {
    headers: new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*'),
  };
  private backendDataPath = '../../../backend/data/';
  private serverUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

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
    const path = `${this.serverUrl}/fetch/holdings`;
    return this.wrapHttpCall(path);
  }

  /**
   * @returns {Observable} Returns portfolio symbols.
   */
  public getPortfolioSymbols(): Observable<Array<string>> {
    const path = `${this.serverUrl}/fetch/portfolio/symbols`;
    return this.wrapHttpCall(path);
  }

  /**
   * @param {string} symbol of stock to retrieve
   * @param {null | boolean} save stock data option
   * @returns {Observable} Returns a single stock data.
   */
  public getStockData(symbol: string, save: null | boolean): Observable<any> {
    const path = `${this.serverUrl}/fetch/stock/${symbol}`;
    if (save !== null) {
      let params = new HttpParams().set('save', String(save));
      return this.wrapHttpCall(path, { ...this.httpOptions, params });
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
    const path = `${this.serverUrl}/fetch/stocks/` + symbols.join(':');
    if (save !== null) {
      let params = new HttpParams().set('save', String(save));
      return this.wrapHttpCall(path, { ...this.httpOptions, params });
    }
    return this.wrapHttpCall(path);
  }

  /**
   * @param {Array} symbol of stock to retrieves
   * @returns {Observable} load a single stock data from local backend data folder.
   */
  public loadStockDataFromDataFolder(symbol: string): Observable<JSON> {
    const path = `${this.backendDataPath}${symbol}.json`;
    return this.wrapHttpCall(path, {...this.httpOptions, responseType: 'json'})
  }

  /**
   * @param {string} symbol of stock to retrieve
   * @param {number} years of history to retrieve
   * @returns {Observable} Returns a single stock dividend history.
   */
  getDividendHistory(symbol: string, years: number): Observable<JSON> {
    const path = `${this.serverUrl}/fetch/dividend-history/${symbol}/${years}`;
    return this.wrapHttpCall(path);
  }

  /**
   * @param {string} symbol of stock to retrieve
   * @returns {Observable} Returns technical insights of a stock.
   */
  getTechnicalInsights(symbol: string): Observable<JSON> {
    const path = `${this.serverUrl}/fetch/technical-insights/${symbol}`;
    return this.wrapHttpCall(path);
  }

  /**
   * @param {string} symbol of stock to retrieve
   * @returns {Observable} Returns recommendations of a stock.
   */
  getRecommendations(symbol: string): Observable<JSON> {
    const path = `${this.serverUrl}/fetch/recommendations/${symbol}`;
    return this.wrapHttpCall(path);
  }

  /**
   * @param {string} symbol of stock to retrieve
   * @returns {Observable} Returns corporate events  of a stock.
   */
  getCorporateEvents(symbol: string): Observable<JSON> {
    const path = `${this.serverUrl}/fetch/events/${symbol}`;
    return this.wrapHttpCall(path);
  }
}
