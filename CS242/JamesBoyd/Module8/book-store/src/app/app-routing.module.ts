import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BirthdayCardFormComponent } from './birthday-card-form/birthday-card-form.component';
import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [
  
  {
    path: '',
    component: BooksComponent,
  },
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
