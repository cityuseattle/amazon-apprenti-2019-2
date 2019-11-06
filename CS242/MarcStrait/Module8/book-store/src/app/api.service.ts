import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';
  private ADD_NEW_BIRTHDAY_CARD_API = 'http://localhost:8080/birthdayCard';
  private FETCH_BOOKS_API = 'http://localhost:8080/books';
  private FETCH_BIRTHDAYCARDS_API = 'http://localhost:8080/birthdayCards';
  private FETCH_BOOK_API = this.ADD_NEW_BOOK_API;
  private FETCH_BIRTHDAY_CARD_API = this.ADD_NEW_BIRTHDAY_CARD_API;
  private UPDATE_BOOK_API = this.ADD_NEW_BOOK_API;
  private DELETE_BOOK_API = this.ADD_NEW_BOOK_API;
  private UPDATE_BIRTHDAYCARD_API = this.ADD_NEW_BIRTHDAY_CARD_API;
  private DELETE_BIRTHDAYCARD_API = this.ADD_NEW_BIRTHDAY_CARD_API;

  constructor(private httpClient: HttpClient) { }

  // Book APIs

  fetchBook(id: string) {
    return this.httpClient.get(`${this.FETCH_BOOK_API}/${id}`);
  }

  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }

  addOrUpdateBook(
    book: { title: string; isbn: string; author: string; picture: string, price: number, _id: null | string }) {
    if (!book._id || book._id === '') return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
    return this.httpClient.put(this.UPDATE_BOOK_API, book);
  }

  deleteBook(id: string) {
    return this.httpClient.delete(`${this.DELETE_BOOK_API}/${id}`);
  }

  // Birthdaycard APIs
  
  fetchBirthdayCard(id: string) {
    return this.httpClient.get(`${this.FETCH_BIRTHDAY_CARD_API}/${id}`);
  }

  fetchBirthdayCards() {
    return this.httpClient.get(this.FETCH_BIRTHDAYCARDS_API);
  }

  addNewBirthdayCard(card: { title: string, material: string; picture: string, price: number }) {
    return this.httpClient.post(this.ADD_NEW_BIRTHDAY_CARD_API, card);
  }

  addOrUpdateBirthdayCard(
    card: { title: string, material: string, picture: string, price: number, _id: null | string }) {
    if (!card._id || card._id === '') return this.httpClient.post(this.ADD_NEW_BIRTHDAY_CARD_API, card);
    return this.httpClient.put(this.UPDATE_BIRTHDAYCARD_API, card);
  }

  deleteBirthdayCard(id: string) {
    return this.httpClient.delete(`${this.DELETE_BIRTHDAYCARD_API}/${id}`);
  }  
}
