
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';
  private FETCH_BOOKS_API = 'http://localhost:8080/books';
  private FETCH_BOOK_API = 'http://localhost:8080/book';
  private UPDATE_BOOK__API = this.ADD_NEW_BOOK_API;
  private DELETE_BOOK_API = this.ADD_NEW_BOOK_API;

  private ADD_NEW_CARD_API = 'http://localhost:8080/card';
  private FETCH_BIRTHDAYCARDS_API = 'http://localhost:8080/birthdayCards';
  private FETCH_BIRTHDAYCARD_API = 'http://localhost:8080/birthday-card';
  private UPDATE_BIRTHDAYCARD_API = this.ADD_NEW_CARD_API;
  private DELETE_BIRTHDAYCARD_API = this.ADD_NEW_CARD_API;
  constructor(private httpClient: HttpClient) { }

  fetchBook(id: string) {
    return this.httpClient.get(`${this.FETCH_BOOK_API}/${id}`);
  }
  fetchBirthdayCard(id: string) {
    return this.httpClient.get(`${this.FETCH_BIRTHDAYCARD_API}/${id}`);
  }
  fetchBirthdayCards() {
    return this.httpClient.get(this.FETCH_BIRTHDAYCARDS_API);
  }
  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }
  addNewCard(card: { title: string; material: string; picture: string, price: number}) {
    return this.httpClient.post(this.ADD_NEW_CARD_API, card);
  }
  addOrUpdateBook(
    book: { title: string; isbn: string; author: string; picture: string; price: number, _id: null | string }) {
    if (!book._id || book._id === '') {return this.httpClient.post(this.ADD_NEW_BOOK_API, book);}
    return this.httpClient.put(this.UPDATE_BOOK__API, book);
  }

  addOrUpdateBirthCard(
    card: { title: string; material: string; picture: string; price: number, _id: null | string }) {
    if (!card._id || card._id === '') {return this.httpClient.post(this.ADD_NEW_CARD_API, card);}
    return this.httpClient.put(this.UPDATE_BIRTHDAYCARD_API, card);
  }
  deleteBook(id: string) {
    return this.httpClient.delete(`${this.DELETE_BOOK_API}/${id}`);
  }
  deleteBirthdayCard(id: string) {
    return this.httpClient.delete(`${this.DELETE_BIRTHDAYCARD_API}/${id}`);
  }
}