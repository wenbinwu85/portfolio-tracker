import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvAdvancedChartWidgetComponent } from './tv-advanced-chart-widget.component';

describe('TvAdvancedChartWidgetComponent', () => {
  let component: TvAdvancedChartWidgetComponent;
  let fixture: ComponentFixture<TvAdvancedChartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TvAdvancedChartWidgetComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TvAdvancedChartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
