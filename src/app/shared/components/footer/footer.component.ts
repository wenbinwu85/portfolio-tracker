import { MatListModule } from "@angular/material/list";
import { Component } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
  standalone: true,
  imports: [MatListModule, MatChipsModule, MatDividerModule, MatIconModule],
})
export class FooterComponent {}
