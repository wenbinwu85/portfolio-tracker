import { CanActivateFn, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';

export const dividendTrackerGuard: CanActivateFn = (route, state) => {
  const dataService = inject(DataService);
  const router = inject(Router);
  const hasDividendIncome = dataService.getItem('portfolioHoldings').dividendIncome > 0;

  if (!hasDividendIncome) {
    router.navigateByUrl('/portfolio/summary');
    return false;
  } else { 
    return true;
  }
};
