import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';
  private ADD_NEW_BIRTHDAY_CARD_API = 'http://localhost:8080/birthdayCard';
  private FETCH_BOOKS_API = 'http://localhost:8080/books';
  private FETCH_BIRTHDAY_CARDS_API = 'http://localhost:8080/birthdayCards'
  private UPDATE_BOOK_API = this.ADD_NEW_BOOK_API;
  private DELETE_BOOK_API = this.ADD_NEW_BOOK_API;
  private UPDATE_BIRTHDAY_CARD_API = this.ADD_NEW_BIRTHDAY_CARD_API;
  private DELETE_BIRTHDAY_CARD_API = this.ADD_NEW_BIRTHDAY_CARD_API;

  constructor(private httpClient: HttpClient) {
  }

  addOrUpdateBook(book: { _id: null | string, title: string; isbn: string; author: string; picture: string, price: number }) {
    if(!book._id || book._id === "") {
      console.log("post fired");
      return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
    }
    console.log("put fired");
    return this.httpClient.put(this.UPDATE_BOOK_API, book);
  }


  addOrUpdateBirthdayCard(birthdaycard: { _id: null | string, title: string; material: string; picture: string, price: number }) {
    if(!birthdaycard._id || birthdaycard._id === "") {
      console.log("post fired");
      return this.httpClient.post(this.ADD_NEW_BIRTHDAY_CARD_API, birthdaycard);
    }
    console.log("put fired");
    return this.httpClient.put(this.UPDATE_BIRTHDAY_CARD_API, birthdaycard);
  }

  fetchBirthdayCard(id: string) {
    return this.httpClient.get(`${this.FETCH_BOOKS_API}/${id}`)
  }
  deleteBirthdayCard(id: string) {
    return this.httpClient.delete(`${this.DELETE_BIRTHDAY_CARD_API}/${id}`)
  }
  fetchBook(id: string) {
    return this.httpClient.get(`${this.FETCH_BOOKS_API}/${id}`)
  }

  deleteBook(id: string) {
    return this.httpClient.delete(`${this.DELETE_BOOK_API}/${id}`)
  }

  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }

  fetchBirthdayCards() {
    return this.httpClient.get(this.FETCH_BIRTHDAY_CARDS_API);
  }
}
