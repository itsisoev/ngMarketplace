import {Routes} from "@angular/router";
import {Products} from './products';


export const productsRoutes: Routes = [
  {
    path: '',
    component: Products,
    children: []
  }
]
