import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component'
import { CartComponent } from './cart/cart.component'


const routes: Routes = [
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
