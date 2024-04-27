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
} from "@angular/material/dialog";
import { HelperService } from "../../../services/helper.service";
import { StockDataSheetComponent } from "../stock-data-sheet/stock-data-sheet.component";

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
  price = 0;
  borderLeftStyle = '';

  constructor(public dialog: MatDialog, private helperService: HelperService) {}

  ngOnInit() {
    const priceKeyPrefix = this.helperService.getPriceKeyPrefix();
    this.price = this.stock[priceKeyPrefix + "Price"];
    this.borderLeftStyle = '0.3rem solid ' + (this.stock.unrealizedGain > 0 ? 'teal' : 'chocolate');
  }

  getLogoSource(stock: any) {
    return `/assets/ticker-logos/${stock.symbol}.png`;
  }

  getColor() {
    return this.helperService.getStockPriceColor(this.stock.symbol);
  }

  openInfoSheet() {
    const dialogRef: MatDialogRef<any> = this.dialog.open(InfoSheetDialog, {
      height: "100%",
      minWidth: "100%",
      closeOnNavigation: true,
      data: { symbol: this.stock.symbol },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: "info-sheet",
  template: `<mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>X</button>
    </mat-dialog-actions>
    <mat-dialog-content class="mat-typography">
      <stock-data-sheet [symbol]="data.symbol" />
    </mat-dialog-content>`,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, StockDataSheetComponent],
})
export class InfoSheetDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>
  ) {
    this.dialogRef.updateSize("95%", "90%");
  }
}
