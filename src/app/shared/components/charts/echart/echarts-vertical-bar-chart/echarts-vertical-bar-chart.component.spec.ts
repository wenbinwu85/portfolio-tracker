import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsVerticalBarChartComponent.ComponentComponent } from './echarts-vertical-bar-chart.component';

describe('EchartsVerticalBarChartComponent.ComponentComponent', () => {
  let component: EchartsVerticalBarChartComponent.ComponentComponent;
  let fixture: ComponentFixture<EchartsVerticalBarChartComponent.ComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EchartsVerticalBarChartComponent.ComponentComponent]
    });
    fixture = TestBed.createComponent(EchartsVerticalBarChartComponent.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
