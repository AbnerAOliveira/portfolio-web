import { Routes } from '@angular/router';

export const SHELL_CHILDREN_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./../../modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('./../../modules/portfolio/portfolio.module').then(
            (m) => m.PortfolioModule
          ),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./../../modules/contacts/contacts.module').then(
            (m) => m.ContactsModule
          ),
      },
    ],
  },
];
