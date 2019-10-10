import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_CARD_API = 'http://localhost:8080/card';
  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';
  private FETCH_BOOKS_API = 'http://localhost:8080/books';
  private FETCH_BIRTHDAYCARDS_API = 'http://localhost:8080/birthdayCards';
  constructor(private httpClient: HttpClient) { }

  fetchBirthdayCards() {
    return this.httpClient.get(this.FETCH_BIRTHDAYCARDS_API);
  }
  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }
  addNewCard(card: { title: string; material: string; picture: string, price: number}) {
    return this.httpClient.post(this.ADD_NEW_CARD_API, card);
  }
  addNewBook(book: { title: string; isbn: string; author: string; picture: string, price: number}) {
      return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
  }
}
