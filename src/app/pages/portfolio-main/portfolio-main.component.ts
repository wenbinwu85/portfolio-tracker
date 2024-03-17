import { Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { StockPriceMovementChartsComponent } from "../../shared/components/stock/stock-price-movement-charts/stock-price-movement-charts.component";
import { DataService } from "../../shared/services/data.service";
import { InfoCardComponent } from "../../shared/components/info-card/info-card.component";
import { DatePipe, JsonPipe, NgFor, NgIf } from "@angular/common";
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: "app-portfolio-main",
  templateUrl: "./portfolio-main.component.html",
  styleUrls: ["./portfolio-main.component.css"],
  standalone: true,
  imports: [
    DatePipe,
    InfoCardComponent,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    NgIf,
    NgFor,
    JsonPipe,
    StockPriceMovementChartsComponent,
  ],
})
export class PortfolioMainComponent implements OnInit{
  events: any = [];
  eventDates: any = [];
  mappedEvents: any = {};
  corporateEvents: any = [];

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    Object.values(this.dataService.portfolioData)
      .filter((stock: any) => stock.quoteType === 'EQUITY')
      .forEach((stock: any) => { 
        this.dataService.getCorporateEvents(stock.symbol, true).subscribe((events: any) => {
          this.corporateEvents.push(...events[stock.symbol]);
          this.corporateEvents.sort((a: any, b: any) => b.time - a.time)
        });
      })
    const stocks = Object.values(this.dataService!.portfolioData).filter((stock: any) => stock.calendarEvents);
    stocks.forEach((stock: any) => {
      const calEvents = stock.calendarEvents;
      const earnings = stock.earnings.earningsChart;
      const position = this.dataService.portfolioHoldings[stock.symbol];

      if (calEvents.exDividendDate) {
        const divYield = (stock.dividendYield * 100).toFixed(2);
        this.events.push({
          name: stock.shortName,
          date: new Date(calEvents.exDividendDate).valueOf(),
          event: "Ex-Dividend",
          icon: "rule",
          color: "sienna",
          detail: `Yield: ${divYield}%`,
        });
      }

      if (calEvents.dividendDate) {
        const dividendValue = (stock.lastDividendValue * position.sharesOwned).toFixed(2);
        this.events.push({
          name: stock.shortName,
          date: new Date(calEvents.dividendDate).valueOf(),
          event: "Dividend",
          icon: "attach_money",
          color: "darkcyan",
          detail: `Income: $${dividendValue}`
        });
      }

      if (calEvents.earnings.earningsDate[0]) {
        const estimate = `${earnings.currentQuarterEstimateDate} estimate: ${earnings.currentQuarterEstimate}`
        this.events.push({
          name: stock.shortName,
          date: new Date(calEvents.earnings?.earningsDate[0]?.slice(0, -2)).valueOf(),
          event: "Earnings",
          icon: "insights",
          color: "slategrey",
          detail: estimate,
        });
      }
    })

    this.events = this.events.filter((event: any) => event.date >= new Date().valueOf());
    this.events.sort((event1: any, event2: any) => event1.date - event2.date);
    this.events.forEach((event: any) => {
      this.eventDates.push(event.date)
    })
    this.eventDates = new Set(this.eventDates);
    this.eventDates = Array.from(this.eventDates);
    this.eventDates.forEach((date: any) => {
      this.mappedEvents[date] = this.events.filter((event: any) => event.date === date);
    })
    this.mappedEvents = Object.entries(this.mappedEvents);
  }
}
