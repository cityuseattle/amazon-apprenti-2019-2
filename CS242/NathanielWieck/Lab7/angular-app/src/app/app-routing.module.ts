import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [{
  path: 'cart',
  component: CartComponent,
},
{
  path: 'payment',
  component: PaymentComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
