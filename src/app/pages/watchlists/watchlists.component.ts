import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { TvMarketQuotesWidgetComponent } from "../../shared/components/tradingview/tv-market-quotes-widget/tv-market-quotes-widget.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { DataService } from "../../shared/services/data.service";
import { NgIf } from "@angular/common";
import { catchError, map } from "rxjs";

@Component({
  selector: "app-watchlists",
  standalone: true,
  imports: [
    NgIf,
    MatExpansionModule,
    MatIconModule,
    TvMarketQuotesWidgetComponent,
  ],
  templateUrl: "./watchlists.component.html",
  styleUrl: "./watchlists.component.css",
})
export class WatchlistsComponent implements OnInit {
  magnificent7PlusSymbols = [
    "AAPL",
    "MSFT",
    "META",
    "GOOG",
    "AMZN",
    "NVDA",
    "NFLX",
    "TSLA",
    "SMCI",
  ];
  magnificent7PlusWatchlist: any[] = [];
  potentialBuysSymbols = [
    "DGRO",
    "DGRW",
    "DIVO",
    "OBDC",
    "BAC",
    "NEE",
    "MCD",
    "LOW",
    "PG",
    "AMD",
    "AMT",
  ];
  potentialBuysWatchlist: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.magnificent7PlusSymbols.forEach((symbol) => {
      this.dataService
        .getStockData(symbol, true)
        .pipe(
          map((response: any) => {
            if (response.status === 500) {
              throw `Api Error: ${symbol} - ${response.status} - ${response.message}`;
            } else {
              return response;
            }
          }),
          catchError((err: any) => {
            console.log(err);
            return this.dataService
              .getStockData(symbol, false)
              .pipe(map((response: any) => response[symbol]));
          })
        )
        .subscribe((stock: any) => {
          this.magnificent7PlusWatchlist.push({
            name: stock.symbol,
            displayName: `${stock.longName} - ${stock.symbol}`,
            changePercent: stock.regularMarketChangePercent,
          });
        });
    });
    this.potentialBuysSymbols.forEach((symbol) => {
      this.dataService
        .getStockData(symbol, true)
        .pipe(
          map((response: any) => {
            if (response.status === 500) {
              throw `Api Error: ${symbol} - ${response.status} - ${response.message}`;
            } else {
              return response;
            }
          }),
          catchError((err: any) => {
            console.log(err);
            return this.dataService
              .getStockData(symbol, false)
              .pipe(map((response: any) => response[symbol]));
          })
        )
        .subscribe((stock: any) => {
          this.potentialBuysWatchlist.push({
            name: stock.symbol,
            displayName: `${stock.longName} - ${stock.symbol}`,
            changePercent: stock.regularMarketChangePercent,
          });
        });
    });

    this.magnificent7PlusWatchlist.sort(
      (a: any, b: any) => a.changePercent - b.changePercent
    );
    this.potentialBuysWatchlist.sort(
      (a: any, b: any) => a.changePercent - b.changePercent
    );
  }
}
