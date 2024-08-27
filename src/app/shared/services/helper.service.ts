import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { StockPriceColorsEnum } from "../model/colors.model";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  private portfolioData;
  today = new Date();

  constructor(private dataService: DataService) { 
    this.portfolioData = this.dataService.portfolioData;
  }

  public getPriceKeyPrefix() {
    const dayOfTheWeek = this.today.getDay();
    const timeNow = this.today.getTime();
    const preMarketStart = this.today.setHours(4, 0, 0);
    const preMarketEnd = this.today.setHours(9, 29, 59)
    const regularMarketOpen = this.today.setHours(9, 30, 0);
    const regularMarketClose = this.today.setHours(16, 0, 0);
    const postMarketStart = this.today.setHours(16, 0, 1);
    const postMarketEnd = this.today.setHours(20, 0, 0);
    const ghostHourStart = this.today.setHours(20, 0, 1);

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
    return 'https://raw.githubusercontent.com/nvstly/icons/main/ticker_icons/' + symbol.toUpperCase() + '.png';
  }
}
