import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFinancialsComponent } from './portfolio-financials.component';

describe('PortfolioFinancialsComponent', () => {
  let component: PortfolioFinancialsComponent;
  let fixture: ComponentFixture<PortfolioFinancialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PortfolioFinancialsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioFinancialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
