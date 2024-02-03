import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceMovementChartsComponent } from './price-movement-charts.component';

describe('PriceMovementChartsComponent', () => {
  let component: PriceMovementChartsComponent;
  let fixture: ComponentFixture<PriceMovementChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PriceMovementChartsComponent]
    });
    fixture = TestBed.createComponent(PriceMovementChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
