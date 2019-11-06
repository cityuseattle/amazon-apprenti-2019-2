import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';
  private ADD_NEW_CARD_API = 'http://localhost:8080/birthdayCard';
  private FETCH_BOOKS_API = 'http://localhost:8080/books';
  private FETCH_BIRTHDAY_CARDS_API = 'http://localhost:8080/birthdayCards'

  constructor(private httpClient: HttpClient) {
  }

  addNewBook(book: { id: string,  title: string; isbn: string; author: string; picture: string, price: number }) {
    return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
  }

  addNewCard(card: {title: string; material: string; picture: string; price: number}) {
    return this.httpClient.post(this.ADD_NEW_CARD_API, card)
  }

  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }

  fetchBirthdayCards() {
    return this.httpClient.get(this.FETCH_BIRTHDAY_CARDS_API);
  }
}
