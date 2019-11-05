import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsComponent } from './payments/payments.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
