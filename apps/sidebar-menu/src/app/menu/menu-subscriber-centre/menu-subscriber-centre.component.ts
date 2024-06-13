import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-subscriber-centre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-subscriber-centre.component.html',
  styleUrl: './menu-subscriber-centre.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSubscriberCentreComponent {}
