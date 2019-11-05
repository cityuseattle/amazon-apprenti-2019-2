import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_CARD_API = 'http://localhost:8080/birthdaycard';
  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';
  private FETCH_BOOKS_API = 'http://localhost:8080/books';
  private FETCH_CARDS_API = 'http://localhost:8080/birthdaycards'

  constructor(private httpClient: HttpClient) { }

fetchBooks() {
  return this.httpClient.get(this.FETCH_BOOKS_API);
}
fetchBirthdaycards() {
  return this.httpClient.get(this.FETCH_CARDS_API);
}

addNewBook(book: { title: string; isbn: string; author: string; picture: string; price: number }) {
    return this.httpClient.post(this.ADD_NEW_BOOK_API, book);}

addNewBirthCard(card: { title: string; material: string; picture: string; price: number }) {
  return this.httpClient.post(this.ADD_NEW_CARD_API, card);
}}