import { MatListModule } from "@angular/material/list";
import { Component } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css'],
  standalone: true,
  imports: [MatListModule, MatChipsModule, MatDividerModule, MatIconModule],
})
export class AppFooterComponent {
  buffetQuoteLink = 'https://www.berkshirehathaway.com/letters/1986.html';
}
