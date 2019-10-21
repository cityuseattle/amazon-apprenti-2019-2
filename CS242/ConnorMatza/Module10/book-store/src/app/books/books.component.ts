import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BooksDetailPageComponent } from '../books-detail-page/books-detail-page.component';
import { ApiService } from '../api.service';

export interface Book {
  _id: string; title: string; isbn: string; author: string; price: number; picture: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  private books: Array<Book>;
  private booksObject: {
    [id: string]: Book;
  };

  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.fetchBooks().subscribe((data: Array<Book>) => {
      this.books = data;
      // Transfer the book array to an object to speed up the look up
      this.booksObject = this.books.reduce((obj, book) => {
        obj[book._id] = book;
        return obj;
      }, {});
    });
  }

  delete(id: string): void {
    delete this.booksObject[id];
    this.books = this.books.filter((book) => book._id !== id );
    this.apiService.deleteBook(id).subscribe();
  }
  openDialog(id: string): void {
    this.dialog.open(BooksDetailPageComponent, {
      width: '350px',
      height: '100%',
      data: this.booksObject[id],
    });
  }
}
