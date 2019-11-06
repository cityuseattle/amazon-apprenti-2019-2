import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BirthdayCardFormComponent } from './birthday-card-form/birthday-card-form.component';
import { BooksComponent } from './books/books.component';
import { BirthdayCardsComponent } from './birthday-cards/birthday-cards.component';

const routes: Routes = [
  {
    path: 'admin/bookform',
    component: BookFormComponent
  },
  {
    path: 'admin/bookform/:id',
    component: BookFormComponent,
  },
  {
    path: 'admin/birthdaycardform/:id',
    component: BirthdayCardFormComponent,
  },
  {
    path: 'admin/birthdaycardform',
    component: BirthdayCardFormComponent,
  },
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'birthdayCards',
    component: BirthdayCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
