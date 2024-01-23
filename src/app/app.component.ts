import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-tracker';
  symbols: string[] = [];

  constructor(private dataService: DataService) {
    // dataService.getPortfolioSymbols().subscribe(symbols => {
    //   this.dataService.getStocksData(symbols, true).subscribe((data: any) => {
    //     console.log(data['dvn'])
    //   })
    // })
    // dataService.loadStockDataFromDataFolder('dvn').subscribe((data: any) => {
    //   console.log(data)
    // });

    dataService.loadStockDataFromDataFolder('vz').subscribe((data: any) => { 
      console.table(data.price)
    })
  }
}
