import { CanActivateFn, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';

export const mainGuardGuard: CanActivateFn = (route, state) => {
  const dataService = inject(DataService);
  const router = inject(Router);
  if (dataService.sanityCheck()) {
    return true;
  } else { 
    router.navigateByUrl('/');
    return false
  }
};
