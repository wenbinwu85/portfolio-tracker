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
    const preMarketStart = new Date().setHours(4, 0, 0);
    const preMarketEnd = new Date().setHours(9, 29, 59)
    const regularMarketStart = new Date().setHours(9, 30, 0);
    const regularMarketClose = new Date().setHours(16, 0, 0);
    const postMarketStart = new Date().setHours(16, 0, 1);
    const postMarketEnd = new Date().setHours(20, 0, 0);
    const ghostHourStart = new Date().setHours(20, 0, 1);
    const ghostHourEnd = new Date().setHours(3, 59, 59)
    const timeNow = new Date().getTime();

    if (preMarketStart <= timeNow && timeNow <= preMarketEnd) {
      return "preMarket";
    } else if (regularMarketStart <= timeNow && timeNow <= regularMarketClose) {
      return "regularMarket";
    } else if (postMarketStart <= timeNow && timeNow <= postMarketEnd) {
      return "postMarket";
    } else if (ghostHourStart <= timeNow) { 
      return "postMarket";
    } else {
      return 'What the hell?!'
    }
  }

  public getStockPriceColor(symbol: string): string { 
    const priceKeyPrefix = this.getPriceKeyPrefix();
    const priceChangePercent = this.portfolioData[symbol][priceKeyPrefix + "ChangePercent"].raw;
    return priceChangePercent > 0 ? StockPriceColorsEnum.Gain : StockPriceColorsEnum.Lost;
  }

  public getTickerLogo(symbol: string) { 
    return `/assets/ticker-logos/${symbol}.png`;
  }
}
