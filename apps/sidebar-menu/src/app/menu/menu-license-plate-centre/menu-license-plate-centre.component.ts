import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-license-plate-centre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-license-plate-centre.component.html',
  styleUrl: './menu-license-plate-centre.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLicensePlateCentreComponent {}
