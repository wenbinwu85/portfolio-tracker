import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPriceInfoCardComponent } from './stock-price-info-card.component';

describe('StockPriceInfoCardComponent', () => {
  let component: StockPriceInfoCardComponent;
  let fixture: ComponentFixture<StockPriceInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [StockPriceInfoCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(StockPriceInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
