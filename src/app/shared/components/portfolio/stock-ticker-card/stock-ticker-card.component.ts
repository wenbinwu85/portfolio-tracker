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
  MatDialogTitle,
} from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { HelperService } from "../../../services/helper.service";
import { StockDataSheetComponent } from "../stock-data-sheet/stock-data-sheet.component";

@Component({
  selector: 'stock-ticker-card',
  templateUrl: './stock-ticker-card.component.html',
  styleUrls: ['./stock-ticker-card.component.css'],
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
export class StockTickerCardComponent {
  @Input({ required: true }) stock!: any;
  currentPrice: any;
  changePercent: any;
  borderLeftStyle = "";
  priceColor = "";

  constructor(public dialog: MatDialog, public helperService: HelperService) {}

  ngOnInit() {
    const prefix = this.helperService.getPriceKeyPrefix();
    this.currentPrice = this.stock[prefix + "Price"];
    this.changePercent = this.stock[prefix + "ChangePercent"];
    this.priceColor = this.helperService.getStockPriceColor(this.stock.symbol);
    this.borderLeftStyle = "0.5rem solid " + this.priceColor;
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
      console.log("Meow!");
    });
  }
}

@Component({
  selector: 'info-sheet-dialog',
  styleUrl: './info-sheet-dialog.component.css',
  templateUrl: './info-sheet-dialog.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatDialogTitle,
    MatDividerModule,
    MatIconModule,
    NgStyle,
    StockDataSheetComponent,
  ],
})
export class InfoSheetDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>
  ) {
    this.dialogRef.updateSize("100%", "100%");
  }
}
