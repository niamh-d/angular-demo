import { Component } from '@angular/core';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';

@Component({
  selector: 'app-support-tickets-dash',
  imports: [NewTicketComponent],
  templateUrl: './support-tickets-dash.component.html',
  styleUrl: './support-tickets-dash.component.css',
})
export class SupportTicketsDash {}
