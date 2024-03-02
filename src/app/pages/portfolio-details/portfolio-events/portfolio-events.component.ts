import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { DataService } from "../../../shared/services/data.service";
import { InfoCardComponent } from "../../../shared/components/info-card/info-card.component";

@Component({
  selector: "portfolio-events",
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatIconModule, InfoCardComponent],
  templateUrl: "./portfolio-events.component.html",
  styleUrls: ["./portfolio-events.component.css"],
})
export class PortfolioEventsComponent implements OnInit {
  events: any[] = [];
  m0CalendarEvents: any = [];
  m1CalendarEvents: any = [];
  m2CalendarEvents: any = [];
  year = new Date().getFullYear();
  month = new Date().getMonth() % 12;
  day = new Date().getDate();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const portfolioData = Object.values(this.dataService.portfolioData).filter(
      (stock: any) => stock.calendarEvents
    );
    const things = [...Array(32).keys()];
    things.forEach((i) => {
      this.m0CalendarEvents.push([]);
      this.m1CalendarEvents.push([]);
    });
    portfolioData.forEach((data: any) => {
      const calendarEvents = data.calendarEvents;
      if (calendarEvents) {
        this.events.push({
          symbol: data.symbol,
          name: data.longName,
          date: calendarEvents.exDividendDate,
          event: "Ex-Dividend",
          icon: "rule",
          color: "orangered",
        });
        this.events.push({
          symbol: data.symbol,
          name: data.longName,
          date: calendarEvents.dividendDate,
          event: "Dividend",
          icon: "attach_money",
          color: "seagreen",
        });
        this.events.push({
          symbol: data.symbol,
          name: data.longName,
          date: calendarEvents.earnings?.earningsDate[0]?.slice(0, -2) || "N/A",
          event: "Earnings",
          icon: "insights",
          color: "navy",
        });
      }
    });

    this.events.forEach((event) => {
      const eventDate = new Date(event.date);
      const eventYear = eventDate.getFullYear();
      const eventMonth = eventDate.getMonth() % 12;
      const eventDay = eventDate.getDate();
      if (eventYear === this.year) {
        if (eventMonth === this.month && eventDay > this.day) {
          this.m0CalendarEvents[eventDay].push(event);
        } else if (eventMonth === this.month + 1) {
          this.m1CalendarEvents[eventDay].push(event);
        }
      }
    });
  }
}
