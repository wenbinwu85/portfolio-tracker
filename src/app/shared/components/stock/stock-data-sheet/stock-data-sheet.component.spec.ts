import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDataSheetComponent } from './stock-data-sheet.component';

describe('StockDataSheetComponent', () => {
  let component: StockDataSheetComponent;
  let fixture: ComponentFixture<StockDataSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [StockDataSheetComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(StockDataSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
