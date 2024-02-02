import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';

// import { AboutComponent } from '../../../pages/about/about.component';
// import { MarketChartsComponent } from '../../../pages/chart-wall/market-charts/market-charts.component';
// import { PortfolioDetailsComponent } from '../../../pages/portfolio-details/portfolio-details.component';
// import { PortfolioMainComponent } from '../../../pages/portfolio-main/portfolio-main.component';
// import { ToolboxComponent } from '../../../pages/toolbox/toolbox.component';
import { TvTickersWidgetComponent } from '../tradingview/tv-tickers-widget/tv-tickers-widget.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    // AboutComponent,
    // MarketChartsComponent,
    MatTabsModule,
    NgFor,
    // PortfolioDetailsComponent,
    // PortfolioMainComponent,
    RouterLink,
    RouterOutlet,
    // ToolboxComponent,
    TvTickersWidgetComponent,
  ],
})
export class HeaderComponent {
  navLinks = [
    {
      label: "Ben's Portfolio",
      route: '',
    },
    {
      label: 'Portfolio Details',
      route: '/portfolio',
    },
    {
      label: 'Chart Wall',
      route: '/chart-wall',
    },
    {
      label: 'Toolbox',
      route: '/toolbox',
    },
    {
      label: 'About',
      route: '/about',
    },
  ];
  activeLink = this.navLinks[0];
}
