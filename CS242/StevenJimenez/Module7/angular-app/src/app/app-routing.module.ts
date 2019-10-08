import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
];


