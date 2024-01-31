import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSymbolInfoWidgetComponent } from './tv-symbol-info-widget.component';

describe('TvSymbolInfoWidgetComponent', () => {
  let component: TvSymbolInfoWidgetComponent;
  let fixture: ComponentFixture<TvSymbolInfoWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TvSymbolInfoWidgetComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TvSymbolInfoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
