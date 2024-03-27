import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTickerButtonsComponent } from './stock-ticker-buttons.component';

describe('StockTickerButtonsComponent', () => {
  let component: StockTickerButtonsComponent;
  let fixture: ComponentFixture<StockTickerButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTickerButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockTickerButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
