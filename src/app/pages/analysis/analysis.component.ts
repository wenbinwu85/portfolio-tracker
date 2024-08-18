import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { DataService } from "../../shared/services/data.service";
import { StockTickerButtonsComponent } from "../../shared/components/stock/stock-ticker-buttons/stock-ticker-buttons.component";
import { ContainerCardComponent } from "../../shared/components/container-card/container-card.component";
import { MatTabsModule } from "@angular/material/tabs";
import { InfoCardComponent } from "../../shared/components/info-card/info-card.component";

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [
    CommonModule,
    ContainerCardComponent,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule,
    StockTickerButtonsComponent,
    InfoCardComponent,
  ],
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent {
  selectedTicker = '';
  selectedInsiderActivities: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() { 
    this.selectedTicker = this.dataService.portfolioDataArray[0].symbol;
    this.onSelect(this.selectedTicker);
  }

  onSelect(ticker: string) { 
    this.selectedTicker = ticker;
    const tickerData = this.dataService.getTickerData(ticker);
    const activities = tickerData.insiderTransactions

    const noData = {
      transactionText: 'No data',
      startDate: { raw: 0 },
      filerName: '',
      filerRelation: '',
      shares: {fmt: 0},
    }
    if (activities.length > 0) { 
      this.selectedInsiderActivities = activities.map((activity: any) => { 
        if (activity.transactionText.startsWith('Purchase')) {
          activity.icon = 'sentiment_very_satisfied';
          activity.color = 'teal';
        } else if (activity.transactionText.startsWith('Sale')) { 
          activity.icon = 'sentiment_very_dissatisfied';
          activity.color = 'chocolate';
        }
        return activity;
      })
    } else {
      this.selectedInsiderActivities = [noData];
    }; 
  }
}
