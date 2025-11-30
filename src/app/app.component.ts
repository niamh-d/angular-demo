import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusDash } from './dashboards/server-status-dash/server-status-dash';
import { TrafficDash } from './dashboards/traffic-dash/traffic-dash';
import { SupportTicketsDash } from './dashboards/tickets/support-tickets-dash/support-tickets-dash.component';
import { DashboardItemComponent } from './dashboards/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusDash,
    TrafficDash,
    SupportTicketsDash,
    DashboardItemComponent,
  ],
})
export class AppComponent {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  currentStatus = 'online';
}
