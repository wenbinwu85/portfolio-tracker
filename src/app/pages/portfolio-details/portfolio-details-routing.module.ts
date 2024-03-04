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
        path: "price-insights",
        loadComponent: () =>
          import("./portfolio-price-insights/portfolio-price-insights.component").then(
            (c) => c.PortfolioPriceInsightsComponent
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
      {
        path: "events",
        loadComponent: () =>
          import("./portfolio-events/portfolio-events.component").then(
            (c) => c.PortfolioEventsComponent
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
