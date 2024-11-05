import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioComponent } from "./portfolio.component";
import { mainGuardGuard } from "../../shared/guards/main-guard.guard";
import { dividendTrackerGuard } from "../../shared/guards/dividend-tracker.guard";

const routes: Routes = [
  {
    path: "",
    component: PortfolioComponent,
    canActivateChild: [mainGuardGuard],
    children: [
      {
        path: "portfolio",
        loadComponent: () =>
          import("./portfolio-holdings/portfolio-holdings.component").then(
            (c) => c.PortfolioHoldingsComponent
          ),
      },
      {
        path: "price-insights",
        loadComponent: () =>
          import("./portfolio-price-insights/portfolio-price-insights.component").then(
            (c) => c.PortfolioPriceInsightsComponent
          ),
      },
      {
        path: "dividend-tracker",
        canActivate: [dividendTrackerGuard],
        loadComponent: () =>
          import("./portfolio-dividend-tracker/portfolio-dividend-tracker.component").then(
            (c) => c.PortfolioDividendTrackerComponent
          ),
      },
      {
        path: "financial-stats",
        loadComponent: () =>
          import("./portfolio-financial-stats/portfolio-financial-stats.component").then(
            (c) => c.PortfolioFinancialStatsComponent
          ),
      },
      {
        path: "analysis",
        loadComponent: () =>
          import("./portfolio-analysis/portfolio-analysis.component").then(
            (c) => c.PortfolioAnalysisComponent
          ),
      },
      {
        path: "watchlists",
        loadComponent: () =>
          import("./portfolio-watchlists/portfolio-watchlists.component").then(
            (c) => c.PortfolioWatchlistsComponent
          ),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
