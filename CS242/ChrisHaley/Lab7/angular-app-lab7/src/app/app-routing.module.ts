import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PaymentsComponent } from './payments/payments.component';


const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
