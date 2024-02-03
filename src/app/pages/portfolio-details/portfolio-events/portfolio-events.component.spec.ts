import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEventsComponent } from './portfolio-events.component';

describe('PortfolioEventsComponent', () => {
  let component: PortfolioEventsComponent;
  let fixture: ComponentFixture<PortfolioEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PortfolioEventsComponent]
    });
    fixture = TestBed.createComponent(PortfolioEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
