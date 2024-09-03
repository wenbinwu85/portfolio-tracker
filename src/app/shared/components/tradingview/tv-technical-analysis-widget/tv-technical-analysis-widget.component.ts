import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from "@angular/core";
import { TradingviewService } from "../../../services/tradingview.service";

@Component({
  selector: "tv-technical-analysis-widget",
  template: "<div #technicalAnalysisWidget></div>",
  styles: [],
  standalone: true,
})
export class TvTechnicalAnalysisWidgetComponent implements AfterViewInit {
  @Input({ required: true }) symbol!: string;
  @Input() height?: string;
  @Input() theme?: string;
  @ViewChild("technicalAnalysisWidget") technicalAnalysisWidget!: ElementRef;

  params: any;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    this.params = {
      symbol: this.symbol,
      height: this.height || '450',
      colorTheme: this.theme || 'light',
      interval: "1m",
      width: "auto",
      isTransparent: false,
      showIntervalTabs: true,
      locale: "en",
      displayMode: "multiple"
    };
    this.params = JSON.stringify(this.params);
    const technicalAnalysis = this.tradingviewService.technicalAnalysisWidget(this.params);
    this.technicalAnalysisWidget.nativeElement.appendChild(technicalAnalysis);
  }
}
