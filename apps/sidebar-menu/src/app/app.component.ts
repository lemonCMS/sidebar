import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonModule } from 'primeng/button';
import { PanelComponent } from './panel/panel.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ButtonModule, PanelComponent, InputGroupModule, InputGroupAddonModule, InputTextModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sidebar-menu';



  private _router: Router = inject(Router);


  public click() {
    console.log('HOI');


    this._router.navigate([{outlets: {sidebar: 'search'}}]).then();
  }
}
