import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';
  private UPDATE_BOOK_API = this.ADD_NEW_BOOK_API;
  private DELETE_BOOK_API = this.ADD_NEW_BOOK_API;
  private FETCH_BOOK_API = 'http://localhost:8080/book';
  private FETCH_BOOKS_API = 'http://localhost:8080/books';

  private ADD_NEW_BIRTHDAY_CARD_API = 'http://localhost:8080/birthdayCard';
  private UPDATE_BIRTHDAY_CARD_API = this.ADD_NEW_BIRTHDAY_CARD_API;
  private DELETE_BIRTHDAY_CARD_API = this.ADD_NEW_BIRTHDAY_CARD_API;
  private FETCH_BIRTHDAY_CARD_API = 'http://localhost:8080/birthdayCard';
  private FETCH_BIRTHDAY_CARDS_API = 'http://localhost:8080/birthdayCards';


  constructor(private httpClient: HttpClient) { }

  fetchBook(id: string) {
    return this.httpClient.get(`${this.FETCH_BOOK_API}/${id}`);
  }

  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }

  addOrUpdateBook(book: { title: string; isbn: string; author: string; picture: string; price: number, _id: null | string }) {
    if(!book._id || book._id === '') return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
    return this.httpClient.put(this.UPDATE_BOOK_API, book);
  }

  deleteBook(id: string) {
    return this.httpClient.delete(`${this.DELETE_BOOK_API}/${id}`);
  }
  
  fetchBirthdayCard(id: string) {
    return this.httpClient.get(`${this.FETCH_BIRTHDAY_CARD_API}/${id}`);
  }

  fetchBirthdayCards() {
    return this.httpClient.get(this.FETCH_BIRTHDAY_CARDS_API);
  }
  
  addOrUpdateCard(birthdayCard: { title: string; material: string; picture: string; price: number, _id: null | string }) {
    if(!birthdayCard._id || birthdayCard._id === '') return this.httpClient.post(this.ADD_NEW_BIRTHDAY_CARD_API, birthdayCard);
    return this.httpClient.put(this.UPDATE_BIRTHDAY_CARD_API, birthdayCard);
  }

  deleteCard(id: string) {
    return this.httpClient.delete(`${this.DELETE_BIRTHDAY_CARD_API}/${id}`);
  }
  
}