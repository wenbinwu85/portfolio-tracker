import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
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
    MatTooltipModule,
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
      tooltip: "Home",
      route: "",
      icon: "home",
    },
    {
      tooltip: "Portfolio",
      route: "/portfolio/portfolio",
      icon: "ballot",
      needData: true,
    },
    {
      tooltip: "Toolbox",
      route: "/toolbox",
      icon: "handyman",
    },
    {
      tooltip: "Live Streams",
      route: "/streams",
      icon: "live_tv",
    },
  ];
  activeLink = this.navLinks[0];
  mobileQuery: MediaQueryList;
  hasData: any;
  showFartPic = false;
  showTickerTape = false;
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

  toggleTickerTape() {
    this.showTickerTape = !this.showTickerTape;
  }

  togglePerson() {
    this.showFartPic = !this.showFartPic;
  }

  refreshData() { 
    const symbols = [...this.dataService.portfolioSymbols];
    const holdings = [...this.dataService.portfolioHoldingsArray];
    this.dataService.portfolioSymbols = [];
    this.dataService.portfolioHoldings = {};
    this.dataService.updatePortfolioData(symbols, holdings);
  }

  clearData() {
    this.dataService.stores?.clearStore('sessionStorage');
    this.dataService.stores?.clearStore('localStorage');
    this.router.navigate([""]);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
}
