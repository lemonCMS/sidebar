import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'page-1',
    loadChildren: () => import('./page-1/page-1.module').then(m => m.Page1Module),
  },
  {
    path: 'page-1',
    loadChildren: () => import('./page-1/page-1.module').then(m => m.Page1Module),
    outlet: 'sidebar'
  },
  {
    path: 'page-2',
    loadChildren: () => import('./page-2/page-2.module').then(m => m.Page2Module),
    outlet: 'sidebar'
  },

  {
    path: 'page-2',
    loadChildren: () => import('./page-2/page-2.module').then(m => m.Page2Module),
  },
  {
    path: 'page-2',
    loadChildren: () => import('./page-2/page-2.module').then(m => m.Page2Module),
    outlet: 'sidebar-right'
  },

  {
    path: 'search',
    loadComponent: () => import('./menu/search/search.component').then(m => m.SearchComponent),
    outlet: 'sidebar'
  },
  {
    path: 'menu-status',
    loadComponent: () => import('./menu/menu-status/menu-status.component').then(m => m.MenuStatusComponent),
    outlet: 'sidebar',
    children: [
      {
        path: 'menu-system-status',
        loadComponent: () => import('./menu/menu-status/menu-system-status/menu-system-status.component').then(m => m.MenuSystemStatusComponent),
        // outlet: 'sidebar-right'
      },
    ]
  },
  {
    path: 'menu-kiosk',
    loadComponent: () => import('./menu/menu-kiosk/menu-kiosk.component').then(m => m.MenuKioskComponent),
    outlet: 'sidebar'
  },
  {
    path: 'menu-subscriber-centre',
    loadComponent: () => import('./menu/menu-subscriber-centre/menu-subscriber-centre.component').then(m => m.MenuSubscriberCentreComponent),
    outlet: 'sidebar',
  },
  {
    path: 'menu-transient-centre',
    loadComponent: () => import('./menu/menu-transient-centre/menu-transient-centre.component').then(m => m.MenuTransientCentreComponent),
    outlet: 'sidebar'
  },
  {
    path: 'menu-payment-centre',
    loadComponent: () => import('./menu/menu-payment-centre/menu-payment-centre.component').then(m => m.MenuPaymentCentreComponent),
    outlet: 'sidebar'
  },
  {
    path: 'menu-ticket-centre',
    loadComponent: () => import('./menu/menu-ticket-centre/menu-ticket-centre.component').then(m => m.MenuTicketCentreComponent),
    outlet: 'sidebar'
  },
  {
    path: 'menu-license-plate-centre',
    loadComponent: () => import('./menu/menu-license-plate-centre/menu-license-plate-centre.component').then(m => m.MenuLicensePlateCentreComponent),
    outlet: 'sidebar'
  },
  {
    path: 'menu-visitor-centre',
    loadComponent: () => import('./menu/menu-visitor-centre/menu-visitor-centre.component').then(m => m.MenuVisitorCentreComponent),
    outlet: 'sidebar'
  },
  {
    path: 'menu-reservations',
    loadComponent: () => import('./menu/menu-reservations/menu-reservations.component').then(m => m.MenuReservationsComponent),
    outlet: 'sidebar'
  },



];
