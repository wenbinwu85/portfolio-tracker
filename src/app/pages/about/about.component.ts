import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
})
export class AboutComponent implements OnInit {
  appName = "Ben's Portfolio Tracker";
  version = 'v2.0.0alpha';
  date = new Date();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}
