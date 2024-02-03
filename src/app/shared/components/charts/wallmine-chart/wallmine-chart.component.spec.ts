import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallmineChartComponent } from './wallmine-chart.component';

describe('WallmineChartComponent', () => {
  let component: WallmineChartComponent;
  let fixture: ComponentFixture<WallmineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WallmineChartComponent]
    });
    fixture = TestBed.createComponent(WallmineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
