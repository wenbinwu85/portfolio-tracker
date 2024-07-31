import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, of, retry } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root",
})
export class AlpacaApiService {
  private httpOptions: any = {
    headers: new HttpHeaders()
      .set("content-type", "application/json")
      .set("Access-Control-Allow-Origin", "*"),
  };
  private backendUrl = "http://127.0.0.1:5000";

  private readonly api_key = "PK3OKOYQHL2RVL2DZ2UC";
  private readonly secret_key = "I5LdfklL2g6shWULe4XMkXdeMlUQ7cNvHQBJBwTD";
  api_base_url = "https://data.alpaca.markets/v1beta1";

  constructor(private http: HttpClient, private dataService: DataService) {}

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

  public getNews(
    symbols: string[],
    start: string,
    end: string,
    limit: number
  ): Observable<any> {
    const apiPath = `${this.backendUrl}/alpaca/fetch/news/`;
    const params = new HttpParams().appendAll({
      symbols: symbols.join(","),
      start,
      end,
      limit,
    });
    const apiOptions = { ...this.httpOptions, params };
    return this.wrapHttpCall(apiPath, apiOptions);
  }
}
