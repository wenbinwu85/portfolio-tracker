import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";

@Component({
  selector: 'stock-watchlist',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css',
})
export class WatchlistComponent {
  @Input() watchlistName?: string[];
  tickerControl = new FormControl("", [Validators.required]);
  watchlist: any[] = [];

  addSymbol() {
    if (!!this.tickerControl.value) {
      this.watchlist.push(this.tickerControl.value);
    }
  }
}
