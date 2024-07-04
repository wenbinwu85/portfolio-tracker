import { NgFor, NgIf, TitleCasePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { PortfolioDetailsComponent } from "../../../pages/portfolio-details/portfolio-details.component";
import { PortfolioMainComponent } from "../../../pages/portfolio-main/portfolio-main.component";
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
    NgFor,
    NgIf,
    PortfolioDetailsComponent,
    PortfolioMainComponent,
    RouterLink,
    RouterOutlet,
    TitleCasePipe,
    ToolboxComponent,
    TvTickersWidgetComponent,
  ],
})
export class HeaderComponent implements OnInit {
  appName = "Ben's Incredibly Great Financial Assets Report & Tracker";
  navLinks = [
    {
      label: "Home",
      route: "",
    },
    {
      label: "Portfolio Details",
      route: "/portfolio",
    },
    {
      label: "Toolbox",
      route: "/toolbox",
    },
  ];
  activeLink = this.navLinks[0];
  showProgressBar = false;

  constructor(
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.dataService.isLoadingData.subscribe((isLoading) => {
      this.showProgressBar = isLoading;
    });
    if (this.dataService.portfolioSymbols.length > 0 &&
      Object.keys(this.dataService.portfolioData).length === this.dataService.portfolioSymbols.length
    ) {
      this.router.navigateByUrl("/main");
    }
  }

  clearData() {
    this.router.navigate(['/'])
    this.dataService.localStorage?.clear();
    setTimeout(() => { 
      window.location.reload();
    }, 500)
  }
}
