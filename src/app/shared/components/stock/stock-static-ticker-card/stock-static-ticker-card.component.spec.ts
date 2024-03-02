import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockStaticTickerCardComponent } from './stock-static-ticker-card.component';

describe('StockStaticTickerCardComponent', () => {
  let component: StockStaticTickerCardComponent;
  let fixture: ComponentFixture<StockStaticTickerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [StockStaticTickerCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(StockStaticTickerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
