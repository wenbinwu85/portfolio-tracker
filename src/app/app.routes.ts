import { Routes } from "@angular/router";
import { mainGuardGuard } from "./shared/guards/main-guard.guard";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/portfolio-main/portfolio-file-loader/portfolio-file-loader.component").then(
        (c) => c.PortfolioFileLoaderComponent
      ),
  },
  {
    path: "main",
    canActivate: [mainGuardGuard],
    loadComponent: () =>
      import("./pages/portfolio-main/portfolio-main.component").then(
        (c) => c.PortfolioMainComponent
      ),
  },
  {
    path: "portfolio",
    canActivate: [mainGuardGuard],
    loadChildren: () =>
      import("./pages/portfolio-details/portfolio-details.module").then(
        (m) => m.PortfolioDetailsModule
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
    canActivate: [mainGuardGuard],
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
