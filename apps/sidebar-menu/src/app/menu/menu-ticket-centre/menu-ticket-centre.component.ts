import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-ticket-centre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-ticket-centre.component.html',
  styleUrl: './menu-ticket-centre.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuTicketCentreComponent {}
