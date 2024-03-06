import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvHeatmapWidgetComponent } from './tv-heatmap-widget.component';

describe('TvHeatmapWidgetComponent', () => {
  let component: TvHeatmapWidgetComponent;
  let fixture: ComponentFixture<TvHeatmapWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvHeatmapWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvHeatmapWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
