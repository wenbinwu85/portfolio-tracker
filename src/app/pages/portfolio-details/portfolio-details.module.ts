import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioDetailsRoutingModule } from './portfolio-details-routing.module';
import { PortfolioDetailsComponent } from './portfolio-details.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioDetailsRoutingModule,
    PortfolioDetailsComponent,
  ],
})
export class PortfolioDetailsModule {}
