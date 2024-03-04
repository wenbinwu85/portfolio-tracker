import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCorporateEventsComponent } from './stock-corporate-events.component';

describe('StockCorporateEventsComponent', () => {
  let component: StockCorporateEventsComponent;
  let fixture: ComponentFixture<StockCorporateEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StockCorporateEventsComponent]
    });
    fixture = TestBed.createComponent(StockCorporateEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
