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
    const marketState = this.dataService?.marketState;
    switch (marketState) { 
      case 'PRE':
        return 'preMarket';
      case 'REGULAR':
        return 'regularMarket';
      case 'POST':
        return 'postMarket';
      default:
        return 'regularMarket';
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
