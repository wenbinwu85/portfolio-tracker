import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketChartsComponent } from '../market/market.component';

describe('MarketChartsComponent', () => {
  let component: MarketChartsComponent;
  let fixture: ComponentFixture<MarketChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MarketChartsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MarketChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
