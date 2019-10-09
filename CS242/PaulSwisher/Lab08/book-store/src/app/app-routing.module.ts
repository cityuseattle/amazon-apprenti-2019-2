import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormComponent } from './book-form/book-form.component';
import { BirthdayCardFormComponent } from './birthday-card-form/birthday-card-form.component';

const routes: Routes = [
 {
  path: 'admin/bookform',
  component: BookFormComponent,
},
{
  path: 'admin/bookform',
  component: BookFormComponent,
},
{
  path: 'admin/birthdaycardform',
  component: BirthdayCardFormComponent,
},
{
  path: 'admin/birthdaycardform',
  component: BirthdayCardFormComponent,

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
