import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [
 {
  path: 'admin/bookform',
  component: BookFormComponent,
},
{
  path: 'admin/bookform',
  component: BookFormComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
