import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { PortfolioDividendComponent } from "../portfolio-details/portfolio-dividend/portfolio-dividend.component";
import { PortfolioFinancialsComponent } from "../portfolio-details/portfolio-financials/portfolio-financials.component";
import { PortfolioHoldingsComponent } from "../portfolio-details/portfolio-holdings/portfolio-holdings.component";
import { PortfolioPriceInsightsComponent } from "./portfolio-price-insights/portfolio-price-insights.component";
import { PortfolioSummaryComponent } from "./portfolio-summary/portfolio-summary.component";

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
    PortfolioDividendComponent,
    PortfolioFinancialsComponent,
    PortfolioHoldingsComponent,
    PortfolioPriceInsightsComponent,
    PortfolioSummaryComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: "./portfolio-details.component.html",
  styleUrls: ["./portfolio-details.component.css"],
})
export class PortfolioDetailsComponent implements OnInit {
  navLinks = [
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
    },
    {
      label: "Dividend Tracker",
      route: "dividend",
      icon: "paid",
    },
    {
      label: "Financial Stats",
      route: "financials",
      icon: "query_stats",
    },
    {
      label: "Analysis",
      route: "analysis",
      icon: "calculate",
    },
  ];
  activeLink = this.navLinks[0];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(["portfolio", this.navLinks[0].route]);
  }
}
