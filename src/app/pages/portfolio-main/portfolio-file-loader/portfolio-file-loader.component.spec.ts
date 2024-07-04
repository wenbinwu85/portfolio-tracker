import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFileLoaderComponent } from './portfolio-file-loader.component';

describe('PortfolioFileLoaderComponent', () => {
  let component: PortfolioFileLoaderComponent;
  let fixture: ComponentFixture<PortfolioFileLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioFileLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioFileLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
