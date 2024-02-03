import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockResearchReportsComponent } from './stock-research-reports.component';

describe('StockResearchReportsComponent', () => {
  let component: StockResearchReportsComponent;
  let fixture: ComponentFixture<StockResearchReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StockResearchReportsComponent]
    });
    fixture = TestBed.createComponent(StockResearchReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
