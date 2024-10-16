import { MatIconModule } from '@angular/material/icon';
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
import { MatDividerModule } from '@angular/material/divider';

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
    this.changePercent = this.stock[prefix + "ChangePercent"];
    this.borderLeftStyle = '0.5rem solid ' + (this.stock.unrealizedGain > 0 ? StockPriceColorsEnum.Gain : StockPriceColorsEnum.Lost);
  }

  getLogoUrl(stock: any) { 
    const api_base_url = 'https://img.logo.dev/';
    const stock_website = stock.website.substring(8);
    const api_token_param = '?token=pk_GM6P82BASrydQzJSS_Yc8g&size=35&format=png';
    const logo_url = api_base_url + stock_website + api_token_param;
    return logo_url;
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
  selector: "info-sheet-dialog",
  styleUrl: "./info-sheet-dialog.component.css",
  templateUrl: "./info-sheet-dialog.component.html",
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatDialogTitle,
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
