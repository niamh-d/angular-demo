import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-traffic-dash',
  imports: [],
  templateUrl: './traffic-dash.html',
  styleUrl: './traffic-dash.css',
})
export class TrafficDash {
  @Input({ required: true }) trafficData!: { id: string; value: number }[];

  get maxTraffic() {
    return Math.max(...this.trafficData.map((data) => data.value));
  }
}
