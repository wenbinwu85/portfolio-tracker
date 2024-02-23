import { CommonModule, NgFor } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { StockPriceInfoCardComponent } from "../../../app/shared/components/stock/stock-price-info-card/stock-price-info-card.component";
import { PortfolioDividendComponent } from "../portfolio-details/portfolio-dividend/portfolio-dividend.component";
import { PortfolioEventsComponent } from "../portfolio-details/portfolio-events/portfolio-events.component";
import { PortfolioFinancialsComponent } from "../portfolio-details/portfolio-financials/portfolio-financials.component";
import { PortfolioHoldingsComponent } from "../portfolio-details/portfolio-holdings/portfolio-holdings.component";
import { PortfolioPriceTrendsComponent } from "../portfolio-details/portfolio-price-trends/portfolio-price-trends.component";

@Component({
  selector: "portfolio-details",
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    NgFor,
    NgxChartsModule,
    PortfolioDividendComponent,
    PortfolioEventsComponent,
    PortfolioFinancialsComponent,
    PortfolioHoldingsComponent,
    PortfolioPriceTrendsComponent,
    RouterLink,
    RouterOutlet,
    StockPriceInfoCardComponent,
  ],
  templateUrl: "./portfolio-details.component.html",
  styleUrls: ["./portfolio-details.component.css"],
})
export class PortfolioDetailsComponent implements OnInit {
  navLinks = [
    {
      label: "Holdings",
      route: "holdings",
    },
    {
      label: "Price Trends",
      route: "price-trends",
    },
    {
      label: "Dividend",
      route: "dividend",
    },
    {
      label: "Financials",
      route: "financials",
    },
    {
      label: "Analysis",
      route: "analysis",
    },
    {
      label: "Events",
      route: "events",
    },
  ];
  activeLink = this.navLinks[0];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(["portfolio", "holdings"]);
  }
}
