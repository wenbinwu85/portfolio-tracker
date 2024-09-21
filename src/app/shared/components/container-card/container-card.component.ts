import { CommonModule, TitleCasePipe } from "@angular/common";
import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";
import { DataService } from "../../services/data.service";
import { StockTickerChipComponent } from "../portfolio/stock-ticker-chip/stock-ticker-chip.component";

@Component({
  selector: "container-card",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDivider,
    StockTickerChipComponent,
    TitleCasePipe,
  ],
  templateUrl: "./container-card.component.html",
  styleUrl: "./container-card.component.css",
})
export class ContainerCardComponent implements OnInit {
  @Input() title?: string;
  @Input({ required: true }) mainContentRef!: TemplateRef<any>;
  @Input() titleContentRef?: TemplateRef<any>;
  @Input() subtitleContentRef?: TemplateRef<any>;
  @Input() footerContentRef?: TemplateRef<any>;
  isTitleTicker!: boolean;
  stock: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.isTitleTicker = this.dataService.portfolioSymbols.includes(
      this.title?.toUpperCase()
    );
    if (this.title && this.isTitleTicker) { 
      this.stock = this.dataService.getTickerData(this.title);
    };
  }
}
