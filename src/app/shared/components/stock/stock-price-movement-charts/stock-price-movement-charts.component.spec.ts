import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPriceMovementChartsComponent } from './stock-price-movement-charts.component';

describe('StockPriceMovementChartsComponent', () => {
  let component: StockPriceMovementChartsComponent;
  let fixture: ComponentFixture<StockPriceMovementChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StockPriceMovementChartsComponent]
    });
    fixture = TestBed.createComponent(StockPriceMovementChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
