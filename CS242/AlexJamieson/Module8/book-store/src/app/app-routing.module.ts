import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormComponent } from './book-form/book-form.component';
import { BirthdayCardFormComponent } from './birthdaycard-form/birthdaycard-form.component';
import { BooksComponent } from './books/books.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
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
    component: BirthdayCardFormComponent,
  },
  {
    path: 'admin/cardform/:id',
    component: BirthdayCardFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
