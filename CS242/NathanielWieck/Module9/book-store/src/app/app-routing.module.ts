import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// set variable and import corresponding webpage component.ts files from correct file path, so can use in this file
// name of variable here must match exported class variable in those component.ts files
import { BookFormComponent } from './book-form/book-form.component';
import { CardFormComponent } from './card-form/card-form.component';
import { BooksComponent } from './books/books.component';
import { BirthdayCardsComponent } from './birthday-cards/birthday-cards.component';

// define desired url address to each specific webpage, and where to find corresponding component.ts and defined exported functions
const routes: Routes = [
  {
   path: 'birthdaycards',
   component: BirthdayCardsComponent, 
  },
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'admin/birthdaycardform',
    component: CardFormComponent,
  },
  {
    path: 'admin/birthdaycardform/:id',
    component: CardFormComponent,
  },
  {
    path: 'admin/bookform',
    component: BookFormComponent,
  },
  {
    path: 'admin/bookform/:id',
    component: BookFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//imported by app.module.ts file
export class AppRoutingModule { }