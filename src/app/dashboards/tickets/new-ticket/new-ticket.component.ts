import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { Control } from '../../../shared/control/control';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, Control],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {}
