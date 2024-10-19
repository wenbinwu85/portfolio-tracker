import { Component, Input } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule
  ],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css',
})
export class WatchlistComponent {
  @Input({ required: true }) symbols!: string[];
  tickerControl = new FormControl("", [Validators.required]);

  addSymbols(watchlistName: string, symbols: string[]) {

  }

  removeSymbols(watchlistName: string, symbols: string[]) {

  }
}
