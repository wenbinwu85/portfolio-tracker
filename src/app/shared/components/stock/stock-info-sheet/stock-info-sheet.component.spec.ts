import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInfoSheetComponent } from './stock-info-sheet.component';

describe('StockInfoSheetComponent', () => {
  let component: StockInfoSheetComponent;
  let fixture: ComponentFixture<StockInfoSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [StockInfoSheetComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(StockInfoSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
