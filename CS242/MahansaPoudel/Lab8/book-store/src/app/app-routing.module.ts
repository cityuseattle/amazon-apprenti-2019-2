import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormComponent } from './book-form/book-form.component';
import { BirthdayFormComponent } from './birthday-form/birthday-form.component';

const routes: Routes = [
  {
    path: 'admin/bookform',
    component: BookFormComponent,
  },
  {
    path: 'admin/bookform/:id',
    component: BookFormComponent,
  },
  {
    path: 'admin/cardform',
    component: BirthdayFormComponent,
  },
  {
    path: 'admin/cardform/:id',
    component: BirthdayFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
