import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./features/products/products.routes').then(m => m.productsRoutes)
      }
    ]
  }
];
