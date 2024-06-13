import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-kiosk',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-kiosk.component.html',
  styleUrl: './menu-kiosk.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuKioskComponent {}
