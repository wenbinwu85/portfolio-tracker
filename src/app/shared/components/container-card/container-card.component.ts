import { CommonModule, TitleCasePipe } from "@angular/common";
import { Component, Input, TemplateRef } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: "container-card",
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDivider, TitleCasePipe],
  templateUrl: "./container-card.component.html",
  styleUrl: "./container-card.component.css",
})
export class ContainerCardComponent {
  @Input() title?: string;
  @Input({ required: true }) mainContentRef!: TemplateRef<any>;
  @Input() titleContentRef?: TemplateRef<any>;
  @Input() subContentRef?: TemplateRef<any>;
  @Input() footerContentRef?: TemplateRef<any>;
}
