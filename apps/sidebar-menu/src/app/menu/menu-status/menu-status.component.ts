import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-status',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './menu-status.component.html',
  styleUrl: './menu-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuStatusComponent {

  public showMenu: WritableSignal<boolean> = signal(true);


  public onRouteActivate(event: any): void {
    console.log('Activate' , event);
    // this.showMenu.set(false);
  }
  public onRouteDeactivate(event: any): void {
    console.log('Deactivate', event);
    // this.showMenu.set(true);
  }
}
