import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { defaultChartOptions } from '../../../../../@iams/shared/chart-widget/chart-widget-defaults';
import { AlertsSummaryWidgetOptions } from './alerts-summary-widget-options.interface';

@Component({
  selector: 'iams-alerts-summary-widget',
  templateUrl: './alerts-summary-widget.component.html',
  styleUrls: ['./alerts-summary-widget.component.scss'],
})
export class AlertsSummaryWidgetComponent {
  @Input() data: ChartData;
  @Input() options: AlertsSummaryWidgetOptions;
  @Input() chartOptions: ChartOptions = defaultsDeep(
    {
      scales: {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      elements: {
        point: {
          radius: 0,
        },
      },
    },
    defaultChartOptions
  );

  isLoading: boolean;

  constructor() {}

  reload() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
