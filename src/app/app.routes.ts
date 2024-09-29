import { Routes } from "@angular/router";
import { mainGuardGuard } from "./shared/guards/main-guard.guard";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/homepage/homepage-landing/homepage-landing.component").then(
        (c) => c.HomepageLandingComponent
      ),
  },
  {
    path: "main",
    canActivate: [mainGuardGuard],
    loadComponent: () =>
      import("./pages/homepage/homepage.component").then(
        (c) => c.HomepageComponent
      ),
  },
  {
    path: "portfolio",
    canActivate: [mainGuardGuard],
    loadChildren: () =>
      import("./pages/portfolio/portfolio.module").then(
        (m) => m.PortfolioModule
      ),
  },
  {
    path: 'analysis',
    canActivate: [mainGuardGuard],
    loadComponent: () =>
      import("./pages/analysis/analysis.component").then(
        (c) => c.AnalysisComponent
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
    path: "streams",
    loadComponent: () =>
      import("./pages/live-streams/live-streams.component").then(
        (c) => c.LiveStreamsComponent
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
