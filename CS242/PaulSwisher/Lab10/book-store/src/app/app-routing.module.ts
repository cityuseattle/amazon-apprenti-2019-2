import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormComponent } from './book-form/book-form.component';
import { BirthdayCardFormComponent } from './birthday-card-form/birthday-card-form.component';
import { BooksComponent } from './books/books.component';
import { BirthdaycardsComponent } from './birthdaycards/birthdaycards.component';

const routes: Routes = [
{
  path: '',
  component: BooksComponent,
},
{
  path: 'admin/birthdaycard',
  component: BirthdaycardsComponent
},
 {
  path: 'admin/book-form',
  component: BookFormComponent,
},
{
  path: 'admin/book-form/:id',
  component: BookFormComponent,
},
{
  path: 'admin/birthdaycardform',
  component: BirthdayCardFormComponent,
},
{
  path: 'admin/birthdaycardform/:id',
  component: BirthdayCardFormComponent,

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
