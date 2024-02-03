import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';

import { DataService } from '../../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'stock-corporate-events',
  standalone: true,
  imports: [CommonModule, MatBottomSheetModule, MatIconModule],
  templateUrl: './stock-corporate-events.component.html',
  styleUrls: ['./stock-corporate-events.component.css'],
  
})
export class StockCorporateEventsComponent implements OnInit {
  @Input({ required: true }) symbol = '';
  events: any = [];
  corporateEventsSubscription$!: Subscription;

  constructor(
    private bottomSheet: MatBottomSheet,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.corporateEventsSubscription$ = this.dataService
      .getCorporateEvents(this.symbol)
      .subscribe((events: any) => {
        this.events = events.slice(-10).reverse();
      });
  }

  ngOnDestroy() { 
    this.corporateEventsSubscription$.unsubscribe();
  }

  viewEventDetails(event: any) {
    this.bottomSheet.open(BottomSheet, {
      hasBackdrop: true,
      data: event,
      panelClass: ['bottom-sheet-panel'],
    });
  }
}

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.component.html',
  styles: [
    'div { padding: 10px; font-size: 1rem; }',
    'mat-icon { padding-left: 10px; font-size: 1.5rem;}',
    '.headline { font-size: 1.5rem; }',
    '.sheet-container { padding-bottom: 50px; }',
  ],
  standalone: true,
  imports: [TitleCasePipe, MatIconModule],
})
export class BottomSheet {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheet>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
