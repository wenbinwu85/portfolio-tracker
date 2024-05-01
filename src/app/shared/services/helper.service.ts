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
    const regularMarketStart = new Date().setHours(9, 30, 0);
    const regularMarketClose = new Date().setHours(16, 0, 0);
    const postMarketEnd = new Date().setHours(20, 0, 0);
    const now = new Date().getTime();

    console.log("%c ----- Sanity Check -----", 'background: teal; color: white');
    const thing = new Date(now).toLocaleTimeString();
    console.log("time now:", thing);
    console.log('%c ------------------------', 'background: teal; color: white');

    if (preMarketStart < now && now < regularMarketStart) {
      console.log("currently in pre-market time");
      return "preMarket";
    } else if (now > regularMarketStart && now < regularMarketClose) {
      console.log("currently in regular market time");
      return "regularMarket";
    } else if (now > regularMarketClose && now < postMarketEnd) {
      console.log("currently in post market time");
      return "postMarket";
    } else { 
      console.log("currently in ghost hours")
      return "postMarket"
    }
  }

  public getStockPriceColor(symbol: string): string { 
    const priceKeyPrefix = this.getPriceKeyPrefix();
    const price = +this.portfolioData[symbol][priceKeyPrefix + "ChangePercent"];
    return price > 0 ? StockPriceColorsEnum.Gain : StockPriceColorsEnum.Lost;
  }
}
