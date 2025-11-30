import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-status-dash',
  imports: [],
  templateUrl: './server-status-dash.html',
  styleUrl: './server-status-dash.css',
})
export class ServerStatusDash {
  @Input({ required: true }) currentStatus: string = 'offline';
}
