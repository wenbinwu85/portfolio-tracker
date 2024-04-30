import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/portfolio-main/portfolio-main.component").then(
        (c) => c.PortfolioMainComponent
      ),
  },
  {
    path: "portfolio",
    loadChildren: () =>
      import("./pages/portfolio-details/portfolio-details.module").then(
        (m) => m.PortfolioDetailsModule
      ),
  },
  {
    path: "watchlists",
    loadComponent: () =>
      import("./pages/watchlists/watchlists.component").then(
        (c) => c.WatchlistsComponent
      ),
  },
  {
    path: "toolbox",
    loadComponent: () =>
      import("./pages/toolbox/toolbox.component").then(
        (c) => c.ToolboxComponent
      ),
  },
  {
    path: "stock/:symbol",
    loadComponent: () =>
      import("./shared/components/stock/stock-data-sheet/stock-data-sheet.component").then(
        (c) => c.StockDataSheetComponent
      ),
  },
  {
    path: "**",
    loadComponent: () =>
      import("./pages/not-found/not-found.component").then(
        (c) => c.NotFoundComponent
      ),
  },
];
