import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChartData } from 'chart.js';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
  advancedPieChartDemoLabels,
  advancedPieChartDemoValues,
  audienceOverviewBounceRateDemoData,
  audienceOverviewBounceRateDemoDataLastWeek,
  audienceOverviewBounceRateDemoLabels,
  audienceOverviewSessionDurationDemoData,
  audienceOverviewSessionDurationDemoLabels,
  audienceOverviewSessionDurationDemoLastWeek,
  audienceOverviewSessionsDemoData,
  audienceOverviewSessionsDemoDataLastWeek,
  audienceOverviewSessionsDemoLabels,
  audienceOverviewUsersDemoData,
  audienceOverviewUsersDemoDataLastWeek,
  audienceOverviewUsersDemoLabels,
  clicksChartDemoLabels,
  clicksChartDemoValues,
  conversionsChartDemoLabels,
  conversionsChartDemoValues,
  recentalertsChartDemoLabels,
  recentalertsChartDemoValues,
  recentalertsTableDemoData,
  alertsChartDemoLabels,
  alertsChartDemoValues,
  alertsSummaryDemoData,
  alertsSummaryDemoLabels,
  top5CategoriesDemoData,
  visitsChartDemoLabels,
  visitsChartDemoValues,
} from '../demo-data/widget-demo-data';

/**
 * @class DashboardService
 * This is just a pages service for populating the charts on the dashboard.
 * You will have to implement a similiar service for the data to be populated.
 * Examples are provided below :)
 */

@Injectable()
export class DashboardService {
  url = environment.backend;

  constructor(private http: HttpClient) {}

  getAlerts() {
    /**
     * REQUEST EXAMPLE
     return this.http.get(this.url + '/alerts').pipe(
     map(response => this.toalertsChartData(response))
     );
     */

    // LOCAL DATA SIMULATION
    return of({
      labels: alertsChartDemoLabels(),
      data: alertsChartDemoValues,
    }).pipe(map(values => this.toalertsChartData(values)));
  }

  /**
   * CONVERTING DATA FROM SERVER TO CHART FORMAT
   * @returns {Chart.ChartData}
   */
  toalertsChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of alerts',
          data: chartData.data,
          backgroundColor: '#FFFFFF',
          barPercentage: 0.5,
        },
      ],
    } as ChartData;
  }

  getVisits() {
    // LOCAL DATA SIMULATION
    return of({
      labels: visitsChartDemoLabels(),
      data: visitsChartDemoValues,
    }).pipe(map(values => this.toVisitsChartData(values)));
  }

  toVisitsChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Visits',
          data: chartData.data,
          backgroundColor: '#FFFFFF',
          fill: false,
          borderColor: '#FFFFFF',
          borderWidth: 2,
          lineTension: 0,
        },
      ],
    } as ChartData;
  }

  getClicks() {
    // LOCAL DATA SIMULATION
    return of({
      labels: clicksChartDemoLabels(),
      data: clicksChartDemoValues,
    }).pipe(map(values => this.toClicksChartData(values)));
  }

  toClicksChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Clicks',
          data: chartData.data,
          fill: false,
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          borderWidth: 2,
        },
      ],
    } as ChartData;
  }

  getConversions() {
    // LOCAL DATA SIMULATION
    return of({
      labels: conversionsChartDemoLabels(),
      data: conversionsChartDemoValues,
    }).pipe(map(values => this.toConversionsChartData(values)));
  }

  toConversionsChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: '# of Conversions',
          data: chartData.data,
          fill: false,
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          borderWidth: 2,
          pointRadius: 0,
          lineTension: 0,
        },
      ],
    } as ChartData;
  }

  getAlertsSummary() {
    // LOCAL DATA SIMULATION
    return of({
      labels: alertsSummaryDemoLabels(),
      data: alertsSummaryDemoData,
    }).pipe(map(values => this.toalertsSummaryChartData(values)));
  }

  toalertsSummaryChartData(chartData: {
    labels: string[];
    data: { [set: string]: number[] };
  }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Forms',
          backgroundColor: '#7cb342',
          borderColor: '#7cb342',
          data: chartData.data.forms,
        },
        {
          label: 'Alerts',
          backgroundColor: '#EEEEEE',
          borderColor: '#EEEEEE',
          data: chartData.data.alerts,
        },
      ],
    } as ChartData;
  }

  getTop5Categories() {
    // LOCAL DATA SIMULATION
    return of(top5CategoriesDemoData).pipe(
      map(values => this.toTop5CategoriesChartData(values))
    );
  }

  toTop5CategoriesChartData(chartData: { label: string; value: number }[]) {
    return {
      labels: chartData.map(data => data.label),
      datasets: [
        {
          data: chartData.map(data => data.value),
          backgroundColor: [
            '#2196F3',
            '#009688',
            '#4CAF50',
            '#607D8B',
            '#E91E63',
          ],
        },
      ],
    } as ChartData;
  }

  getAudienceOverviewUsers() {
    // LOCAL DATA SIMULATION
    return of({
      labels: audienceOverviewUsersDemoLabels(),
      data: {
        thisWeek: audienceOverviewUsersDemoData,
        lastWeek: audienceOverviewUsersDemoDataLastWeek,
      },
    }).pipe(map(values => this.toAudienceOverviewUsersChartData(values)));
  }

  toAudienceOverviewUsersChartData(chartData: {
    labels: string[];
    data: { [set: string]: number[] };
  }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Users',
          data: chartData.data.thisWeek,
          lineTension: 0,
          fill: false,
          borderColor: '#4285f4',
          pointRadius: 0,
        },
        {
          label: 'Users - Last Week',
          data: chartData.data.lastWeek,
          lineTension: 0,
          fill: false,
          borderColor: 'rgba(66, 133, 244, 0.3)',
          borderDash: [3, 5],
          pointRadius: 0,
        },
      ],
    } as ChartData;
  }

  getAudienceOverviewSessions() {
    // LOCAL DATA SIMULATION
    return of({
      labels: audienceOverviewSessionsDemoLabels(),
      data: {
        thisWeek: audienceOverviewSessionsDemoData,
        lastWeek: audienceOverviewSessionsDemoDataLastWeek,
      },
    }).pipe(map(values => this.toAudienceOverviewSessionsChartData(values)));
  }

  toAudienceOverviewSessionsChartData(chartData: {
    labels: string[];
    data: { [set: string]: number[] };
  }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Sessions',
          data: chartData.data.thisWeek,
          lineTension: 0,
          fill: false,
          backgroundColor: '#4285f4',
          borderColor: '#4285f4',
        },
        {
          label: 'Sessions - Last Week',
          data: chartData.data.lastWeek,
          lineTension: 0,
          fill: false,
          borderColor: 'rgba(66, 133, 244, 0.3)',
          borderDash: [3, 5],
          pointRadius: 0,
        },
      ],
    } as ChartData;
  }

  getAudienceOverviewBounceRate() {
    // LOCAL DATA SIMULATION
    return of({
      labels: audienceOverviewBounceRateDemoLabels(),
      data: {
        thisWeek: audienceOverviewBounceRateDemoData,
        lastWeek: audienceOverviewBounceRateDemoDataLastWeek,
      },
    }).pipe(map(values => this.toAudienceOverviewBounceRateChartData(values)));
  }

  toAudienceOverviewBounceRateChartData(chartData: {
    labels: string[];
    data: { [set: string]: number[] };
  }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Bounce Rate',
          data: chartData.data.thisWeek,
          lineTension: 0,
          fill: false,
          backgroundColor: '#4285f4',
          borderColor: '#4285f4',
        },
        {
          label: 'Bounce Rate - Last Week',
          data: chartData.data.lastWeek,
          lineTension: 0,
          fill: false,
          borderColor: 'rgba(66, 133, 244, 0.3)',
          borderDash: [3, 5],
          pointRadius: 0,
        },
      ],
    } as ChartData;
  }

  getAudienceOverviewSessionDuration() {
    // LOCAL DATA SIMULATION
    return of({
      labels: audienceOverviewSessionDurationDemoLabels(),
      data: {
        thisWeek: audienceOverviewSessionDurationDemoData,
        lastWeek: audienceOverviewSessionDurationDemoLastWeek,
      },
    }).pipe(
      map(values => this.toAudienceOverviewSessionDurationChartData(values))
    );
  }

  toAudienceOverviewSessionDurationChartData(chartData: {
    labels: string[];
    data: { [set: string]: number[] };
  }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Session Duration',
          data: chartData.data.thisWeek,
          lineTension: 0,
          fill: false,
          backgroundColor: '#4285f4',
          borderColor: '#4285f4',
        },
        {
          label: 'Session Duration - Last Week',
          data: chartData.data.lastWeek,
          lineTension: 0,
          fill: false,
          borderColor: 'rgba(66, 133, 244, 0.3)',
          borderDash: [3, 5],
          pointRadius: 0,
        },
      ],
    } as ChartData;
  }

  getRecentAlertsTableData() {
    // LOCAL DATA SIMULATION
    return of(recentalertsTableDemoData);
  }

  getRecentalertsData() {
    return of({
      labels: recentalertsChartDemoLabels(),
      data: recentalertsChartDemoValues,
    }).pipe(map(values => this.toRecentalertsChartData(values)));
  }

  toRecentalertsChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'alerts',
          backgroundColor: '#DBF6F9',
          borderColor: '#DBF6F9',
          data: chartData.data,
          lineTension: 0,
        },
      ],
    };
  }

  getAdvancedPieChartData() {
    return of({
      labels: advancedPieChartDemoLabels,
      data: advancedPieChartDemoValues,
    }).pipe(map(values => this.toAdvancedPieChartData(values)));
  }

  toAdvancedPieChartData(chartData: { labels: string[]; data: number[] }) {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: 'alerts',
          backgroundColor: [
            '#009688',
            '#2196F3',
            '#9C27B0',
            '#00BCD4',
            '#F44336',
            '#FF9800',
          ],
          borderColor: 'transparent',
          data: chartData.data,
        },
      ],
    };
  }
}
