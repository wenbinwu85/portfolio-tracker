import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWatchlistsComponent } from './portfolio-watchlists.component';

describe('PortfolioWatchlistsComponent', () => {
  let component: PortfolioWatchlistsComponent;
  let fixture: ComponentFixture<PortfolioWatchlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioWatchlistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioWatchlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
