import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvTechnicalAnalysisWidgetComponent } from './tv-technical-analysis-widget.component';

describe('TvTechnicalAnalysisWidgetComponent', () => {
  let component: TvTechnicalAnalysisWidgetComponent;
  let fixture: ComponentFixture<TvTechnicalAnalysisWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TvTechnicalAnalysisWidgetComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TvTechnicalAnalysisWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
