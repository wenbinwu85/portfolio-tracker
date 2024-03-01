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
  @ViewChild("technicalAnalysisWidget") technicalAnalysisWidget!: ElementRef;

  constructor(private tradingviewService: TradingviewService) {}

  ngAfterViewInit(): void {
    const technicalAnalysis = this.tradingviewService.technicalAnalysisWidget(
      this.symbol,
      this.height
    );
    this.technicalAnalysisWidget.nativeElement.appendChild(technicalAnalysis);
  }
}
