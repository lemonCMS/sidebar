import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-visitor-centre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-visitor-centre.component.html',
  styleUrl: './menu-visitor-centre.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuVisitorCentreComponent {}
