import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTickerNameComponent } from './stock-ticker-name.component';

describe('StockTickerNameComponent', () => {
  let component: StockTickerNameComponent;
  let fixture: ComponentFixture<StockTickerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [StockTickerNameComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(StockTickerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
