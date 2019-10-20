import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [
  {
    path: 'bookform',
    component: BookFormComponent,
  },
  {
    path:'bookform/:id',
    component: BookFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
