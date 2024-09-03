import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { TradingviewService } from '../../../services/tradingview.service';

@Component({
  selector: 'tv-symbol-overview-widget',
  standalone: true,
  imports: [],
  template: '<div #symbolOverviewWidget></div>'
})
export class TvSymbolOverviewWidgetComponent {
  @Input({ required: true }) company!: string;
  @Input({ required: true }) symbol!: string;
  @Input() timeFrame: string = '1D';
  @ViewChild('symbolOverviewWidget') symbolOverviewWidget!: ElementRef;

  params: any;

  constructor(private tradingviewService: TradingviewService) { }
  
  ngAfterViewInit(): void {
    this.params= {
      symbols: [
        [
          this.company,
          `${this.symbol}|${this.timeFrame}`
        ]
      ],
      chartOnly: false,
      width: '100%',
      height: '600',
      locale: 'en',
      colorTheme: 'light',
      autosize: true,
      showVolume: true,
      showMA: true,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: 'right',
      scaleMode: 'Normal',
      fontFamily: '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
      fontSize: 10,
      noTimeScale: false,
      valuesTracking: 1,
      changeMode: 'price-and-percent',
      chartType: 'area',
      maLineColor: 'rgba(255, 152, 0, 1)',
      maLineWidth: 1,
      maLength: 14,
      headerFontSize: 'medium',
      gridLineColor: 'rgba(41, 98, 255, 0.74)',
      lineWidth: 2,
      lineType: 2,
      dateRanges: [
        '1d|1',
        '1w|60',
        '1m|30',
        '3m|60',
        'ytd|1D',
        '12m|1D',
        '60m|1W',
        '120m|1M',
        'all|1M'
      ]
    };
    this.params = JSON.stringify(this.params);
    const symbolOverview = this.tradingviewService.symbolOverviewWidget(this.params);
    this.symbolOverviewWidget.nativeElement.appendChild(symbolOverview);
  }
}
