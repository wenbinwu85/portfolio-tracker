import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvMiniChartWidgetComponent } from './tv-mini-chart-widget.component';

describe('TvMiniChartComponent', () => {
  let component: TvMiniChartWidgetComponent;
  let fixture: ComponentFixture<TvMiniChartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TvMiniChartWidgetComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TvMiniChartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
