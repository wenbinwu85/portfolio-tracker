import { TitleCasePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { PortfolioComponent } from "../../../pages/portfolio/portfolio.component";
import { HomepageComponent } from "../../../pages/homepage/homepage.component";
import { ToolboxComponent } from "../../../pages/toolbox/toolbox.component";
import { DataService } from "../../services/data.service";
import { TvTickersWidgetComponent } from "../tradingview/tv-tickers-widget/tv-tickers-widget.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule,
    PortfolioComponent,
    HomepageComponent,
    RouterLink,
    RouterOutlet,
    TitleCasePipe,
    ToolboxComponent,
    TvTickersWidgetComponent,
  ],
})
export class HeaderComponent implements OnInit {
  appLongName = "Ben's Incredibly Great Financial Assets Report & Tracker";
  appShortName = "B.I.G.F.A.R.T";
  appVersion = 'V2.1'
  appName = this.appShortName;
  showProgressBar = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.isLoadingData.subscribe((isLoading) => {
      this.showProgressBar = isLoading;
    });
    if (this.dataService.sanityCheck()) {
      this.router.navigateByUrl("/main");
    }
  }

  switchAppName() {
    this.appName = this.appName === this.appShortName
      ? this.appLongName
      : this.appShortName;
  }
}
