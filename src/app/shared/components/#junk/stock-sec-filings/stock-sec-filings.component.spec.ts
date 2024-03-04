import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSecFilingsComponent } from './stock-sec-filings.component';

describe('StockSecFilingsComponent', () => {
  let component: StockSecFilingsComponent;
  let fixture: ComponentFixture<StockSecFilingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StockSecFilingsComponent]
    });
    fixture = TestBed.createComponent(StockSecFilingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
