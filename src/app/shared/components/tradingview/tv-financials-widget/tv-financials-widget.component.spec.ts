import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvFinancialsWidgetComponent } from './tv-financials-widget.component';

describe('TvFinancialsWidgetComponent', () => {
  let component: TvFinancialsWidgetComponent;
  let fixture: ComponentFixture<TvFinancialsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TvFinancialsWidgetComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TvFinancialsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
