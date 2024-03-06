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
  magnificent7Symbols = [
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
    "PG",
    "AMD",
    "AMT",
    "DGRO",
    "DGRW",
    "DIVO",
    "MCHP",
    "OBDC",
    "BAC",
    "NEE",
    "CVS",
    "WFC",
    "NTES",
  ];
  potentialBuysWatchlist: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.magnificent7Symbols.forEach((symbol) => {
      try {
        this.dataService
          .loadStockDataFromDataFolder(symbol)
          .subscribe((stock: any) => {
            this.magnificent7PlusWatchlist.push({
              name: stock.symbol,
              displayName: `${stock.longName} - ${stock.symbol}`,
              changePercent: stock.regularMarketChangePercent,
            });
          });
      } catch {
        this.dataService.getStockData(symbol, true).subscribe((stock: any) => {
          this.magnificent7PlusWatchlist.push({
            name: stock[symbol].symbol,
            displayName: stock[symbol].longName,
          });
        });
      }
    });
    this.magnificent7PlusWatchlist.sort(
      (a: any, b: any) => a.changePercent - b.changePercent
    );

    this.potentialBuysSymbols.forEach((symbol) => {
      this.dataService
        .loadStockDataFromDataFolder(symbol)
        .pipe(
          map((response: any) => { 
            console.log('WTF!')
            console.table(response)
            if (response.status === 500) {
              throw ('Api Error')
            } else { 
              return response
            }
          }),
          catchError((err: any) => {
            console.log("Error:", err)
            return this.dataService.getStockData(symbol, true)
          })
        )
        .subscribe((stock: any) => {
          console.log('diu')
          console.log(stock.symbol, stock.longName)
          this.potentialBuysWatchlist.push({
            name: stock.symbol,
            displayName: `${stock.longName} - ${stock.symbol}`,
            changePercent: stock.regularMarketChangePercent,
          });
        });
    });
    this.potentialBuysWatchlist.sort(
      (a: any, b: any) => a.changePercent - b.changePercent
    );
  }
}
