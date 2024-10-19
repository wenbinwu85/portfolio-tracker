import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { AppFooterComponent } from "./shared/components/app-footer/app-footer.component";
import { AppHeaderComponent } from "./shared/components/app-header/app-header.component";
import { TvTickersWidgetComponent } from "./shared/components/tradingview/tv-tickers-widget/tv-tickers-widget.component";
import { DataService } from "./shared/services/data.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    AppFooterComponent,
    AppHeaderComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet,
    TvTickersWidgetComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Ben's Incredibly Great Financial Assets Report & Tracker";
  navLinks = [
    {
      label: "Home",
      route: "",
      icon: "home",
    },
    {
      label: "Portfolio",
      route: "/portfolio",
      icon: "ballot",
      needData: true,
    },
    {
      label: "Analysis",
      route: "/analysis",
      icon: "calculate",
      needData: true,
    },
    {
      label: "Watchlists",
      route: "/watchlists",
      icon: "list",
      needData: true,
    },
    {
      label: "Toolbox",
      route: "/toolbox",
      icon: "handyman",
    },
    {
      label: "Live",
      route: "/streams",
      icon: "live_tv",
    },
  ];
  activeLink = this.navLinks[0];
  mobileQuery: MediaQueryList;
  hasData: any;
  private _mobileQueryListener: () => void;

  constructor(
    private dataService: DataService,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.dataService.hasPortfolioData$.subscribe(
      (hasData) => this.hasData = hasData
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  clearData() {
    this.router.navigate([""]);
    this.dataService.localStorage?.clear();
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
}
