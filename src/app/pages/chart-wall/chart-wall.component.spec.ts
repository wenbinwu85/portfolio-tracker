import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWallComponent } from './chart-wall.component';

describe('ChartWallComponent', () => {
  let component: ChartWallComponent;
  let fixture: ComponentFixture<ChartWallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChartWallComponent]
    });
    fixture = TestBed.createComponent(ChartWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
