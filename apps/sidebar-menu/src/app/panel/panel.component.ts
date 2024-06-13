import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import {
  ActivatedRoute, ActivatedRouteSnapshot,
  ActivationEnd,
  ChildActivationEnd,
  NavigationEnd,
  Router, RouterLink,
  RouterOutlet
} from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, SidebarModule, RouterOutlet, ButtonModule, RouterLink],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  public isOpen = signal(false);
  public isFullScreen = signal(false);

  private _router = inject(Router);

  public constructor() {
    this._router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      tap((): void => {
        let isOpen = false;
        let isFullScreen = false;

        const matchedRoutes = this._router.routerState.snapshot.root.children;

        for (const route of matchedRoutes) {
          if (route.outlet && route.outlet === 'sidebar') {
            isOpen = true;

            for (const childRoute of route.children) {
              if (childRoute.outlet === 'primary') {
                isFullScreen = true;
                break
              }
            }
            break;
          }
        }

        this.isOpen.set(isOpen);
        this.isFullScreen.set(isFullScreen);

      }),
      takeUntilDestroyed()
    ).subscribe();
  }

  public hide(): void {
    this._router.navigate([{ outlets: { sidebar: null, 'sidebar-right': null } }]).then();
  }
}
