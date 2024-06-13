import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-payment-centre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-payment-centre.component.html',
  styleUrl: './menu-payment-centre.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuPaymentCentreComponent {}
