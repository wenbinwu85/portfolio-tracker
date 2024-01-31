import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvMarketQuotesWidgetComponent } from './tv-market-quotes-widget.component';

describe('TvMarketQuotesWidgetComponent', () => {
  let component: TvMarketQuotesWidgetComponent;
  let fixture: ComponentFixture<TvMarketQuotesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TvMarketQuotesWidgetComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TvMarketQuotesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
