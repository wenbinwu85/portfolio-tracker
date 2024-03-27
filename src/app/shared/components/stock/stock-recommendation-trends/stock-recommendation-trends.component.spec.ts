import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRecommendationTrendsComponent } from './stock-recommendation-trends.component';

describe('StockRecommendationTrendsComponent', () => {
  let component: StockRecommendationTrendsComponent;
  let fixture: ComponentFixture<StockRecommendationTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockRecommendationTrendsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockRecommendationTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
