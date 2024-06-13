import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-transient-centre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-transient-centre.component.html',
  styleUrl: './menu-transient-centre.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuTransientCentreComponent {}
