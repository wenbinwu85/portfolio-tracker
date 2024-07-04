import { CanActivateFn, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';

export const mainGuardGuard: CanActivateFn = (route, state) => {
  const dataService = inject(DataService);
  const router = inject(Router);
  const symbols = dataService.getItem('portfolioSymbols');
  let hasData = true;

  if (!symbols) {
    router.navigateByUrl('/');
    return false
  }
  
  symbols.forEach((symbol: string) => {
    if (!dataService.getItem(symbol)) {
      hasData = false;
    };
  });
  return hasData;
};
