import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerButtonsComponent } from './ticker-buttons.component';

describe('TickerButtonsComponent', () => {
  let component: TickerButtonsComponent;
  let fixture: ComponentFixture<TickerButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TickerButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TickerButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
