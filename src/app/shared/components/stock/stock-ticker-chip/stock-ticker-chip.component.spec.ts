import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTickerChipComponent } from './stock-ticker-chip.component';

describe('StockTickerChipComponent', () => {
  let component: StockTickerChipComponent;
  let fixture: ComponentFixture<StockTickerChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTickerChipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockTickerChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
