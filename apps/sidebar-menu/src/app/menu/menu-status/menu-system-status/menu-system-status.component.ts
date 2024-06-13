import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-system-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-system-status.component.html',
  styleUrl: './menu-system-status.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSystemStatusComponent {}
