import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'container-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    TitleCasePipe,
    MatDivider,
  ],
  templateUrl: './container-card.component.html',
  styleUrl: './container-card.component.css'
})
export class ContainerCardComponent {
  @Input({ required: true }) title: string = 'Card Title';
  @Input({ required: true }) mainContentRef!: TemplateRef<any>;
  @Input() titleContentRef?: TemplateRef<any>;
  @Input() subContentRef?: TemplateRef<any>;
  @Input() footerContentRef?: TemplateRef<any>;
}
