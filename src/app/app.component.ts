import { MediaMatcher } from "@angular/cdk/layout";
import {
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { TvTickersWidgetComponent } from "./shared/components/tradingview/tv-tickers-widget/tv-tickers-widget.component";
import { DataService } from "./shared/services/data.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
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
    },
    {
      label: "Analysis",
      route: "/analysis",
      icon: "calculate",
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
