import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedRowComponent } from './expanded-row.component';

describe('ExpandedRowComponent', () => {
  let component: ExpandedRowComponent;
  let fixture: ComponentFixture<ExpandedRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExpandedRowComponent]
    });
    fixture = TestBed.createComponent(ExpandedRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
