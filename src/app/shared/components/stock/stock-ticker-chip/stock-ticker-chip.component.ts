import { NgStyle, PercentPipe } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { StockDataSheetComponent } from '../stock-data-sheet/stock-data-sheet.component';

@Component({
  selector: 'stock-ticker-chip',
  standalone: true,
  imports: [
    NgStyle,
    MatChipsModule,
    PercentPipe
  ],
  templateUrl: './stock-ticker-chip.component.html',
  styleUrl: './stock-ticker-chip.component.css'
})
export class StockTickerChipComponent {
  @Input() stock!: any;

  constructor(public dialog: MatDialog) { }

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