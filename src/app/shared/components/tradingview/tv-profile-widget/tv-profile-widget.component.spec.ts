import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvProfileWidgetComponent } from './tv-profile-widget.component';

describe('TvProfileWidgetComponent', () => {
  let component: TvProfileWidgetComponent;
  let fixture: ComponentFixture<TvProfileWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TvProfileWidgetComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TvProfileWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
