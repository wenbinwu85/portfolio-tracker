import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-echart',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: () => import('echarts') }),
    },
  ],
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.css'],
})
export class EchartComponent {
  @Input({ required: true }) options!: EChartsOption;
  @Input() updateOptions?: any;
  @Input() renderType: 'svg' | 'canvas' = 'svg';
  initOptions = {
    renderer: this.renderType,
  };
}
