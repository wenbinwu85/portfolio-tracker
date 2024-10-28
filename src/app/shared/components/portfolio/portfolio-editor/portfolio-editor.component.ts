import { AsyncPipe } from "@angular/common";
import { ChangeDetectorRef, Component } from "@angular/core";
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { DataService } from "../../../services/data.service";
import { ContainerCardComponent } from "../../container-card/container-card.component";

@Component({
  selector: "portfolio-editor",
  standalone: true,
  imports: [
    AsyncPipe,
    ContainerCardComponent,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./portfolio-editor.component.html",
  styleUrl: "./portfolio-editor.component.css",
})
export class PortfolioEditorComponent {
  tickerControl = new FormControl("", [Validators.required]);
  sharesControl = new FormControl(0, [Validators.required]);
  costAverageControl = new FormControl(0, [Validators.required]);
  holdingsControl = new FormControl();
  symbols: string[] = [];
  holdings: any[] = [];
  updateOrAdd = "update";
  selectedHoldings: any[] = [];

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.holdings = [...this.dataService.portfolioHoldingsArray];
    this.symbols = this.holdings.map((holding) => holding.symbol);  // do not use dataService.portfolioSymbols
    this.holdingsControl.valueChanges.subscribe((selected) => {
      this.selectedHoldings = selected;
      this.cdr.detectChanges();
    });
  }

  saveHolding() {
    let holding: any = {};
    const holdingIndex = this.holdings.findIndex(
      (holding) => holding.symbol.toLowerCase() === this.tickerControl.value?.toLocaleLowerCase()
    );

    if (this.updateOrAdd === "add" && holdingIndex !== -1) {
      const existingHolding = this.holdings[holdingIndex];
      const totalShares = existingHolding.shares + this.sharesControl.value;
      const totalCost =
        existingHolding.shares * existingHolding.costAverage +
        this.sharesControl.value! * this.costAverageControl.value!;
      const newCostAverage = totalCost / totalShares;
      holding = {
        ...this.holdings[holdingIndex],
        symbol: this.tickerControl.value?.toUpperCase(),
        shares: totalShares,
        costAverage: newCostAverage,
      };
      this.holdings[holdingIndex] = holding;
    } else {
      holding = {
        ...this.holdings[holdingIndex],
        symbol: this.tickerControl.value?.toUpperCase(),
        shares: this.sharesControl.value!,
        costAverage: this.costAverageControl.value!,
      };
      holdingIndex === -1
        ? this.holdings.unshift(holding)
        : (this.holdings[holdingIndex] = holding);
    }

    this.tickerControl.setValue("");
    this.sharesControl.setValue(0);
    this.costAverageControl.setValue(0);
  }

  deleteHoldings() {
    this.holdings = this.holdings.filter(
      (holding) => !this.selectedHoldings.includes(holding.symbol)
    );
  }

  clearSelection() {
    this.holdingsControl.setValue([]);
  }

  updatePortfolio() {
    this.symbols = this.holdings.map((holding) => holding.symbol);
    this.dataService.updatePortfolioData(this.symbols, this.holdings);
  }
}
