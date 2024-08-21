import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { StockPriceColorsEnum } from "../model/colors.model";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  private portfolioData;
  
  constructor(private dataService: DataService) { 
    this.portfolioData = this.dataService.portfolioData;
  }

  public getPriceKeyPrefix() {
    const dayOfTheWeek = new Date().getDay();
    const timeNow = new Date().getTime();
    const preMarketStart = new Date().setHours(4, 0, 0);
    const preMarketEnd = new Date().setHours(9, 29, 59)
    const regularMarketOpen = new Date().setHours(9, 30, 0);
    const regularMarketClose = new Date().setHours(16, 0, 0);
    const postMarketStart = new Date().setHours(16, 0, 1);
    const postMarketEnd = new Date().setHours(20, 0, 0);
    const ghostHourStart = new Date().setHours(20, 0, 1);

    // TODO: check these conditions on Monday
    if (
      (this.dataService.marketState !== 'CLOSED') &&
      (0 < dayOfTheWeek && dayOfTheWeek < 6)
    ) {
      if (preMarketStart <= timeNow && timeNow <= preMarketEnd) {
        return "preMarket";
      } else if (regularMarketOpen <= timeNow && timeNow <= regularMarketClose) {
        return "regularMarket";
      } else if (postMarketStart <= timeNow && timeNow <= postMarketEnd) {
        return "postMarket";
      } else if (ghostHourStart <= timeNow) {
        return "postMarket";
      } else {
        return "regularMarket";
      }
    } else { 
      return "regularMarket";
    }
  }

  public getStockPriceColor(symbol: string): string { 
    const prefix = this.getPriceKeyPrefix();
    const priceChangePercent = this.portfolioData[symbol][prefix + "ChangePercent"]?.raw;
    return priceChangePercent > 0 ? StockPriceColorsEnum.Gain : StockPriceColorsEnum.Lost;
  }

  public getTickerLogo(symbol: string) { 
    return `/assets/ticker-logos/${symbol}.png`;
    // return 'https://raw.githubusercontent.com/nvstly/icons/main/ticker_icons/' + symbol.toUpperCase() + '.png';
  }
}
