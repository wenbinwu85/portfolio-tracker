import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { StockPriceColorsEnum } from "../model/colors.model";
import { MarketStates } from "../model/data-enums.model";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  today = new Date();

  constructor(private dataService: DataService) { }

  public getPriceKeyPrefix() {
    switch (this.dataService.marketState) { 
      case MarketStates.PRE:
        return 'preMarket';
      case MarketStates.REGULAR:
        return 'regularMarket';
      case MarketStates.POST:
        return 'postMarket';
      default:
        return 'regularMarket';
    }
  }

  public getStockPriceColor(symbol: string): string { 
    const prefix = this.getPriceKeyPrefix();
    const tickerData = this.dataService.getTickerData(symbol);
    const priceChangePercent = tickerData[prefix + "ChangePercent"]?.raw;
    return priceChangePercent > 0 ? StockPriceColorsEnum.Gain : StockPriceColorsEnum.Lost;
  }

  public getTickerLogo(symbol: string) { 
    return 'https://raw.githubusercontent.com/nvstly/icons/main/ticker_icons/' + symbol.toUpperCase() + '.png';
  }
}
