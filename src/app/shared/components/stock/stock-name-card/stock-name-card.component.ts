import {
  CommonModule,
  CurrencyPipe,
  NgStyle,
  PercentPipe,
} from "@angular/common";
import { Component, Inject, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import { HelperService } from "../../../services/helper.service";
import { StockDataSheetComponent } from "../stock-data-sheet/stock-data-sheet.component";
import { StockPriceColorsEnum } from "../../../model/colors.model";

@Component({
  selector: "stock-name-card",
  templateUrl: "./stock-name-card.component.html",
  styleUrls: ["./stock-name-card.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    MatCardModule,
    MatDialogModule,
    NgStyle,
    PercentPipe,
  ],
})
export class StockNameCardComponent {
  @Input({ required: true }) stock!: any;
  currentPrice: any;
  changePercent: any;

  borderLeftStyle = '';

  constructor(public dialog: MatDialog, public helperService: HelperService) {}

  ngOnInit() {
    const prefix = this.helperService.getPriceKeyPrefix();
    this.currentPrice = this.stock[prefix + "Price"];
    this.changePercent = this.stock[prefix + "ChangePercent"]
    if (typeof this.currentPrice !== "number") { 
      this.currentPrice = this.currentPrice.raw;
    }
    if (typeof this.changePercent !== "number") { 
      this.changePercent = this.changePercent.raw;
    }
    this.borderLeftStyle = '0.3rem solid ' + (this.stock.unrealizedGain > 0 ? StockPriceColorsEnum.Gain : StockPriceColorsEnum.Lost);
  }

  openInfoSheet() {
    const dialogRef: MatDialogRef<any> = this.dialog.open(InfoSheetDialog, {
      height: "100%",
      minWidth: "100%",
      closeOnNavigation: true,
      data: {
        symbol: this.stock.symbol,
        longName: this.stock.longName,

      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: "info-sheet",
  template: `
    <div [ngStyle]="{display: 'flex', 'justify-content': 'space-between', 'margin-right': '1rem'}">
      <h1 mat-dialog-title>{{ data.longName }}</h1>
      <mat-dialog-actions align="end">
        <button mat-button mat-dialog-close>X</button>
      </mat-dialog-actions>
    </div>
    <mat-dialog-content class="mat-typography">
      <stock-data-sheet [symbol]="data.symbol" />
    </mat-dialog-content>`,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatDialogTitle, StockDataSheetComponent, NgStyle],
})
export class InfoSheetDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>
  ) {
    this.dialogRef.updateSize("100%", "100%");
  }
}
