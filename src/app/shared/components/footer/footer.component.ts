import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [MatDividerModule, MatIconModule],
})
export class FooterComponent implements OnInit {
  appInfo = '';
  angularVersion = '';
  pythonVersion = '';

  constructor() {}

  ngOnInit(): void {}
}
