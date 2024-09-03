import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from "@angular/core";
import { TradingviewService } from "../../../services/tradingview.service";

@Component({
  selector: "tv-single-quote-widget",
  template: "<div #singleQuoteWidget></div>",
  styles: [],
  standalone: true,
})
export class TvSingleQuoteWidgetComponent implements AfterViewInit {
  @Input({ required: true }) symbol!: string;
  @Input() type = "simple";
  @Input() theme?: string;
  @ViewChild("singleQuoteWidget") singleQuoteWidget!: ElementRef;

  params: any;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    this.params =  {
      symbol: this.symbol,
      width: this.type === "simple" ? 280 : 800,
      height: "auto",
      colorTheme: this.theme || 'light',
      isTransparent: true,
      locale: "en"
    }
    this.params = JSON.stringify(this.params);
    const singleQuote = this.tradingviewService.singleQuoteWidget(this.params, this.type);
    this.singleQuoteWidget.nativeElement.appendChild(singleQuote);
  }
}
