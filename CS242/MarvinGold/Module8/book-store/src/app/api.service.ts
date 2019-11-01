import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailDialogComponent } from './book-detail-dialog/book-detail-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';
  private ADD_NEW_CARD_API = 'http://localhost:8080/birthdayCard';
  private FETCH_BOOKS_API = 'http://localhost:8080/books';
  private FETCH_CARDS_API = 'http://localhost:8080/birthdayCards';
  private UPDATE_BOOK_API = this.ADD_NEW_BOOK_API;
  private DELETE_BOOK_API = this.ADD_NEW_BOOK_API;
  private UPDATE_CARD_API = this.ADD_NEW_CARD_API;
  private DELETE_CARD_API = this.ADD_NEW_CARD_API;
  private FETCH_BOOK_API = 'http://localhost:8080/book';
  private FETCH_CARD_API = 'http://localhost:8080/birthdayCard';
  constructor(private httpClient: HttpClient) { }

  //addNewBook(book: {title: string; isbn: string; author: string; picture: string; price: number})
  //{
   // return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
  //}

fetchBook(id: string) {
  return this.httpClient.get(`${this.FETCH_BOOK_API}/${id}`);
}

fetchCard(id: string) {
  return this.httpClient.get(`${this.FETCH_CARD_API}/${id}`);
}
addOrUpdateBook(
  book: {title: string; isbn: string; author: string; picture: string; price: number, _id: null | string }) {
  if (!book._id || book._id === '') return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
  return this.httpClient.put(this.UPDATE_BOOK_API, book);
  }

addOrUpdateCard(
  card: {title: string; material: string; picture: string; price: number; _id: null | string }) {
    if (!card._id || card._id ==='' ) return this.httpClient.post(this.ADD_NEW_CARD_API, card);
    return this.httpClient.put(this.UPDATE_CARD_API, card);
  }

deleteBook(id: string) {
  return this.httpClient.delete(`${this.DELETE_BOOK_API}/${id}`);
}

deleteCard(id: string) {
  return this.httpClient.delete(`${this.DELETE_CARD_API}/${id}`);
}
 // addNewCard(card: {title: string; material: string, picture: string, price: number})
 // {
  //  return this.httpClient.post(this.ADD_NEW_CARD_API,card);
  //}

  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }

  fetchCards() {
    return this.httpClient.get(this.FETCH_CARDS_API);
  }
 
}

