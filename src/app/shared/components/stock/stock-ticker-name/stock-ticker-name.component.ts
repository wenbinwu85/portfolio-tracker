import {
  CommonModule,
  CurrencyPipe,
  NgStyle,
  PercentPipe,
} from "@angular/common";
import { Component, Inject, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { StockInfoSheetComponent } from "../stock-info-sheet/stock-info-sheet.component";

@Component({
  selector: "stock-ticker-name",
  templateUrl: "./stock-ticker-name.component.html",
  styleUrls: ["./stock-ticker-name.component.css"],
  standalone: true,
  imports: [CommonModule, CurrencyPipe, PercentPipe, NgStyle, MatDialogModule],
})
export class StockTickerNameComponent {
  @Input({ required: true }) stock!: any;
  price = 0;
  priceChange = 0;
  priceChangePercent = 0;

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    if (this.stock.preMarketChange) {
      this.price = this.stock.preMarketPrice;
    } else if (this.stock.postMarketChange) {
      this.price = this.stock.postMarketPrice;
    } else {
      this.price = this.stock.regularMarketPrice;
    }
  }

  getLogo(stock: any) {
    return `/assets/ticker-logos/${stock.symbol}.png`;
  }

  getColor() {
    return this.stock.regularMarketChange > 0 ? "forestgreen" : "tomato";
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
  template: ` <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>X</button>
    </mat-dialog-actions>
    <mat-dialog-content class="mat-typography">
      <stock-info-sheet [symbol]="data.symbol" />
    </mat-dialog-content>`,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, StockInfoSheetComponent],
})
export class InfoSheetDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>
  ) {
    // this.dialogRef.updateSize('95%', '90%');
  }
}
