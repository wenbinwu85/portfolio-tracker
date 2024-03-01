import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { TvTickersWidgetComponent } from "./shared/components/tradingview/tv-tickers-widget/tv-tickers-widget.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    TvTickersWidgetComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "portfolio-tracker";
}
