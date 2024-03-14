import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDetailsComponent } from './portfolio-details.component';
import { PortfolioDetailsRoutingModule } from './portfolio-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PortfolioDetailsComponent,
    PortfolioDetailsRoutingModule,
  ],
})
export class PortfolioDetailsModule {}
