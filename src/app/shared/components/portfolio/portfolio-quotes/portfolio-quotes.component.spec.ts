import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioQuotesComponent } from './portfolio-quotes.component';

describe('PortfolioQuotesComponent', () => {
  let component: PortfolioQuotesComponent;
  let fixture: ComponentFixture<PortfolioQuotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PortfolioQuotesComponent]
    });
    fixture = TestBed.createComponent(PortfolioQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
