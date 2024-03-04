import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPriceInsightsComponent } from './portfolio-price-insights.component';

describe('PortfolioPriceInsightsComponent', () => {
  let component: PortfolioPriceInsightsComponent;
  let fixture: ComponentFixture<PortfolioPriceInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PortfolioPriceInsightsComponent]
    });
    fixture = TestBed.createComponent(PortfolioPriceInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
