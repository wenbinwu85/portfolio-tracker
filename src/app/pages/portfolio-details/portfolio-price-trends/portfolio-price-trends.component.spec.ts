import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPriceTrendsComponent } from './portfolio-price-trends.component';

describe('PortfolioPriceTrendsComponent', () => {
  let component: PortfolioPriceTrendsComponent;
  let fixture: ComponentFixture<PortfolioPriceTrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PortfolioPriceTrendsComponent]
    });
    fixture = TestBed.createComponent(PortfolioPriceTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
