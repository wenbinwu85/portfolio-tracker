import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvTickersWidgetComponent } from './tv-tickers-widget.component';

describe('TvTickersWidgetComponent', () => {
  let component: TvTickersWidgetComponent;
  let fixture: ComponentFixture<TvTickersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TvTickersWidgetComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TvTickersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
