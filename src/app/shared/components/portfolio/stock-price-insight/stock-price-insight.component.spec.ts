import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPriceInsightComponent } from './stock-price-insight.component';

describe('StockPriceInsightComponent', () => {
  let component: StockPriceInsightComponent;
  let fixture: ComponentFixture<StockPriceInsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockPriceInsightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockPriceInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
