import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { CardFormComponent } from './card-form/card-form.component';

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
    path: 'admin/birthdaycardform',
    component: CardFormComponent,
  },
  {
    path: 'admin/birthdaycardform/:id',
    component: CardFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }