import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTickerButtonsComponent } from './portfolio-ticker-buttons.component';

describe('PortfolioTickerButtonsComponent', () => {
  let component: PortfolioTickerButtonsComponent;
  let fixture: ComponentFixture<PortfolioTickerButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioTickerButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioTickerButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
