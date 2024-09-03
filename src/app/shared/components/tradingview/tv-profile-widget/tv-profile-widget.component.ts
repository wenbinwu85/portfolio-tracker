import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { TradingviewService } from '../../../services/tradingview.service';

@Component({
  selector: 'tv-profile-widget',
  template: '<div #profileWidget></div>',
  styles: [],
  standalone: true,
})
export class TvProfileWidgetComponent implements AfterViewInit {
  @Input({ required: true }) symbol!: string;
  @Input() width!: string;
  @Input() height!: string;
  @Input() theme?: string;
  @ViewChild('profileWidget') profileWidget!: ElementRef;

  params: any;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    this.params = {
      symbol: this.symbol,
      width: this.width || '100%',
      height: this.height || 'auto',
      colorTheme: this.theme || 'light',
      isTransparent: false,
      locale: "en"
    }
    this.params = JSON.stringify(this.params)
    const widget = this.tradingviewService.symbolProfileWidget(this.params);
    this.profileWidget.nativeElement.appendChild(widget);
  }
}
