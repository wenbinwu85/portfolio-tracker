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

  constructor(private tradingviewService: TradingviewService) { }
  
  ngAfterViewInit(): void {
    const symbolOverview = this.tradingviewService.symbolOverviewWidget(this.company, this.symbol, this.timeFrame);
    this.symbolOverviewWidget.nativeElement.appendChild(symbolOverview);
  }
}
