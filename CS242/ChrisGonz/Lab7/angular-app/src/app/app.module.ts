import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cartComponent } from './cart/cart.component';
import { payInfoComponent } from  './payInfo/payInfo.component';

@NgModule({
  declarations: [
    AppComponent,
    cartComponent,
    payInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
