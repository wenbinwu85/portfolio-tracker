import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './shared/services/data.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-tracker';
  symbols: string[] = [];

  constructor(private dataService: DataService) {
    // dataService.loadStockDataFromDataFolder('vz').subscribe((data: any) => {
    //   console.table(data.price)
    // })

    console.log(dataService.portfolioHoldings)
    console.log(dataService.portfolioSymbols)
    console.log(dataService.portfolioData)
  }
}
