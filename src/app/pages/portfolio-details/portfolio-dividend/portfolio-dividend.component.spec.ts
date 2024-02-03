import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDividendComponent } from './portfolio-dividend.component';

describe('PortfolioDividendComponent', () => {
  let component: PortfolioDividendComponent;
  let fixture: ComponentFixture<PortfolioDividendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PortfolioDividendComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioDividendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
