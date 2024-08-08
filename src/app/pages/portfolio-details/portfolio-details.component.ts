import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { DataService } from "../../shared/services/data.service";

@Component({
  selector: "portfolio-details",
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    NgxChartsModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: "./portfolio-details.component.html",
  styleUrls: ["./portfolio-details.component.css"],
})
export class PortfolioDetailsComponent implements OnInit {
  navLinks: any[];
  activeLink: any;

  constructor(private dataService: DataService, private router: Router) {
    this.navLinks = [
      {
        label: "Summary",
        route: "summary",
        icon: "summarize",
      },
      {
        label: "Holdings",
        route: "holdings",
        icon: "list_alt",
      },
      {
        label: "Price Insights",
        route: "price-insights",
        icon: "price_change",
      }
    ];
    if (dataService.getItem('portfolioHoldings').dividendIncome > 0) { 
      this.navLinks.push({
        label: "Dividend Tracker",
        route: "dividend",
        icon: "paid",
      })
    }
    this.navLinks.push(
      {
        label: "Financial Stats",
        route: "financials",
        icon: "query_stats",
      }
    )
    this.activeLink = this.navLinks[0];
  }

  ngOnInit() {
    this.router.navigate(["portfolio", this.navLinks[0].route]);
  }
}
