import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-reservations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-reservations.component.html',
  styleUrl: './menu-reservations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuReservationsComponent {}
