import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ContainerCardComponent } from '../../shared/components/container-card/container-card.component';
import { TickerButtonsComponent } from '../../shared/components/ticker-buttons/ticker-buttons.component';
import { WatchlistComponent } from '../../shared/components/watchlist/watchlist.component';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-watchlists',
  standalone: true,
  imports: [ContainerCardComponent, MatButtonModule, TickerButtonsComponent, WatchlistComponent],
  templateUrl: './watchlists.component.html',
  styleUrl: './watchlists.component.css'
})
export class WatchlistsComponent implements OnInit {
  watchlist = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.watchlist = [...this.watchlist];
  }
}
