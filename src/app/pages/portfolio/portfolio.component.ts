import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { DataService } from "../../shared/services/data.service";

@Component({
  selector: "portfolio",
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
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"],
})
export class PortfolioComponent {
  navLinks: any[];
  activeLink: any;

  constructor(
    public router: Router,
    private dataService: DataService,
  ) {
    this.navLinks = [
      {
        label: "My Portfolio",
        route: "portfolio",
        icon: "list_alt",
      },
      {
        label: "Price Insights",
        route: "price-insights",
        icon: "price_change",
      },
    ];
    if (dataService.portfolioHoldings.dividendIncome > 0) {
      this.navLinks.push({
        label: "Dividend Tracker",
        route: "dividend-tracker",
        icon: "paid",
      });
    }
    this.navLinks.push({
      label: "Financial Stats",
      route: "financial-stats",
      icon: "query_stats",
    });
    this.navLinks.push({
      label: "Analysis",
      route: "analysis",
      icon: "calculate",
    });
    this.navLinks.push({
      label: "Watchlist",
      route: "watchlists",
      icon: "list",
    });
    this.activeLink = this.navLinks[0];
  }
}
