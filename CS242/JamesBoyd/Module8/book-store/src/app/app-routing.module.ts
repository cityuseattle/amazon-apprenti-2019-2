import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [
  {
    path: 'admin/book-form',
    component: BookFormComponent,
  },
  {
    path: 'admin/book-form/:id',
    component: BookFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
