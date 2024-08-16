import { Component } from '@angular/core';
import { ContainerCardComponent } from '../../shared/components/container-card/container-card.component';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-live-streams',
  standalone: true,
  imports: [ContainerCardComponent, MatChipsModule],
  templateUrl: './live-streams.component.html',
  styleUrl: './live-streams.component.css'
})
export class LiveStreamsComponent {
  selectedStream = 1;

  switchStream(stream: number) { 
    this.selectedStream = stream;
  }
}

