import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { cartComponent } from './cart/cart.component';
import { payInfoComponent } from './payInfo/payInfo.component'; 


const routes: Routes = [
  {
  path: 'cart',
  component: cartComponent,
 },
{
  path: 'payInfo',
  component: payInfoComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
