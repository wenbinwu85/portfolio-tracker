import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { TradingviewService } from '../../../services/tradingview.service';

@Component({
  selector: 'tv-financials-widget',
  template: '<div #symbolFinancialsWidget></div>',
  styles: [],
  standalone: true,
})
export class TvFinancialsWidgetComponent implements AfterViewInit {
  @Input({ required: true }) symbol!: string;
  @Input() width?: string;
  @Input() height?: string;
  @Input() displayMode? = 'compact';
  @Input() theme? = 'light';
  @ViewChild('symbolFinancialsWidget') symbolFinancialsWidget!: ElementRef;

  params: any;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    this.params = {
      symbol: this.symbol,
      width: this.width,
      height: this.height || '490',
      displayMode: this.displayMode,
      colorTheme: this.theme,
      largeChartUrl: "",
      isTransparent: false,
      locale: "en"
    }
    this.params = JSON.stringify(this.params)
    const widget = this.tradingviewService.symbolFinancialsWidget(this.params);
    this.symbolFinancialsWidget.nativeElement.appendChild(widget);
  }
}
