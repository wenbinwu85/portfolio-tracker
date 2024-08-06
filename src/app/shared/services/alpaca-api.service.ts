import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, of, retry } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root",
})
export class AlpacaApiService {
  private readonly apiBaseUrl = 'https://data.alpaca.markets';
  private readonly apiKey = "PK41CNLBVKS2CHYHD6FQ";
  private readonly secretKey = "hOurdDodVN23wnjowMOyXYjeaobsmIbXtqhOwSbE";
  private httpHeaders = new HttpHeaders()
    // .set("content-type", "application/json")
    // .set("Access-Control-Allow-Origin", "*")
    .set("APCA-API-KEY-ID", this.apiKey)
    .set("APCA-API-SECRET-KEY", this.secretKey)

  constructor(private http: HttpClient, private dataService: DataService) {}

  private error(error: HttpErrorResponse): Observable<any> {
    let errorMessage =
      error.error instanceof ErrorEvent
        ? error.error.message
        : `Error Code: ${error.status} Message: ${error.message}`;
    return of({ data: [], message: errorMessage, status: 500 });
  }

  public wrapHttpCall(
    url: string,
    options: any
  ): Observable<any> {
    const call = this.http.get<any>(url, options);
    return call.pipe(retry<any>(2), catchError(this.error));
  }

  public getLatestBars(): Observable<any> {
    const symbols = this.dataService.portfolioSymbols;
    const apiUrl = this.apiBaseUrl + '/v2/stocks/bars/latest';
    const params = new HttpParams().appendAll({
      symbols: symbols.join(','),
      feed: 'iex'
    })
    const options = { headers: this.httpHeaders, params };
    return this.wrapHttpCall(apiUrl, options);
  }

  public getNews(
    symbols: string[],
    start: string,
    end: string,
    limit: number
  ): Observable<any> {
    const apiUrl = this.apiBaseUrl + '/v1beta1/alpaca/fetch/news/';
    const params = new HttpParams().appendAll({
      symbols: symbols.join(","),
      start,
      end,
      limit,
    });
    const options = { headers: this.httpHeaders, params };
    return this.wrapHttpCall(apiUrl, options);
  }
}
