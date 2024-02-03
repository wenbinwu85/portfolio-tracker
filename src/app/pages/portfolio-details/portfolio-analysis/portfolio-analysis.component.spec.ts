import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAnalysisComponent } from './portfolio-analysis.component';

describe('PortfolioAnalysisComponent', () => {
  let component: PortfolioAnalysisComponent;
  let fixture: ComponentFixture<PortfolioAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PortfolioAnalysisComponent]
    });
    fixture = TestBed.createComponent(PortfolioAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
