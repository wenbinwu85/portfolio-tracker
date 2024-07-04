import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mainGuardGuard } from './main-guard.guard';

describe('mainGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mainGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
