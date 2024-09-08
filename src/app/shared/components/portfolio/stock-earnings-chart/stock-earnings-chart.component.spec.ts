import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockEarningsChartComponent } from './stock-earnings-chart.component';

describe('StockEarningsChartComponent', () => {
  let component: StockEarningsChartComponent;
  let fixture: ComponentFixture<StockEarningsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockEarningsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockEarningsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
