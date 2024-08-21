import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDayPriceRangeComponent } from './stock-day-price-range.component';

describe('StockDayPriceRangeComponent', () => {
  let component: StockDayPriceRangeComponent;
  let fixture: ComponentFixture<StockDayPriceRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [StockDayPriceRangeComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(StockDayPriceRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
