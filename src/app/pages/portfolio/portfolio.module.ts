import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PortfolioComponent,
    PortfolioRoutingModule,
  ],
})
export class PortfolioModule {}
