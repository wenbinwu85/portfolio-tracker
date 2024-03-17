import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'echarts-vertical-bar-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: () => import('echarts') }),
    },
  ],
  templateUrl: './echarts-vertical-bar-chart.component.html',
  styleUrls: ['./echarts-vertical-bar-chart.component.css'],
})
export class EchartsVerticalBarChartComponent {
  @Input({ required: true }) options!: EChartsOption;
  @Input() updateOptions?: any;
  @Input() renderType: 'svg' | 'canvas' = 'svg';
  initOptions = {
    renderer: this.renderType,
  };
}
