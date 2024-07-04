import { Component } from '@angular/core';
import { ContainerCardComponent } from '../../shared/components/container-card/container-card.component';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css'],
    standalone: true,
    imports: [ContainerCardComponent],
})
export class NotFoundComponent { }
