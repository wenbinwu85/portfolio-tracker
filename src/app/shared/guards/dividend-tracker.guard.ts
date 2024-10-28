import { CanActivateFn, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';

export const dividendTrackerGuard: CanActivateFn = (route, state) => {
  const dataService = inject(DataService);
  const router = inject(Router);
  const hasDividendIncome = dataService.stores.getItem('localStorage', 'portfolioHoldings').dividendIncome > 0;

  if (hasDividendIncome) {
    return true;
  } else { 
    router.navigateByUrl('/portfolio/portfolio');
    return false;
  }
};
