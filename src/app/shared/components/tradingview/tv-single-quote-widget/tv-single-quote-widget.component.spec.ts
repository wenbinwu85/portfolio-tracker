import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSingleQuoteWidgetComponent } from './tv-single-quote-widget.component';

describe('TvSingleQuoteWidgetComponent', () => {
  let component: TvSingleQuoteWidgetComponent;
  let fixture: ComponentFixture<TvSingleQuoteWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TvSingleQuoteWidgetComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TvSingleQuoteWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
