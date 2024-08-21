import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockNameCardComponent } from './stock-name-card.component';

describe('StockNameCardComponent', () => {
  let component: StockNameCardComponent;
  let fixture: ComponentFixture<StockNameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [StockNameCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(StockNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
