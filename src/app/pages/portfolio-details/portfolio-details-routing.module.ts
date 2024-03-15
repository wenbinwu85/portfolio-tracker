import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioDetailsComponent } from "./portfolio-details.component";

const routes: Routes = [
  {
    path: "",
    // redirectTo: '/portfolio/price-insights',
    // pathMatch: 'full',
    component: PortfolioDetailsComponent,
    children: [
      {
        path: 'summary',
        loadComponent: () =>
          import("./portfolio-summary/portfolio-summary.component").then(
            (c) => c.PortfolioSummaryComponent
          ),
      },
      {
        path: "holdings",
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
        path: "dividend",
        loadComponent: () =>
          import("./portfolio-dividend/portfolio-dividend.component").then(
            (c) => c.PortfolioDividendComponent
          ),
      },
      {
        path: "financials",
        loadComponent: () =>
          import("./portfolio-financials/portfolio-financials.component").then(
            (c) => c.PortfolioFinancialsComponent
          ),
      },
      {
        path: "analysis",
        loadComponent: () =>
          import("./portfolio-analysis/portfolio-analysis.component").then(
            (c) => c.PortfolioAnalysisComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioDetailsRoutingModule {}
