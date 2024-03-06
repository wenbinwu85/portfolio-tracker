import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPLineComponent } from './stock-p-line.component';

describe('StockPLineComponent', () => {
  let component: StockPLineComponent;
  let fixture: ComponentFixture<StockPLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockPLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockPLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
