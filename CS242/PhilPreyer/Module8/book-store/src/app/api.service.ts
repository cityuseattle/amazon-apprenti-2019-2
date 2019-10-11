import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private ADD_NEW_BOOK_API = 'http://localhost:8080/book';
 private ADD_NEW_BIRTHDAYCARD_API = 'http://localhost:8080/birthday-card';
 private FETCH_BOOKS_API = 'http://localhost:8080/books';
 private FETCH_BIRTHDAY_CARDS_API = 'http://localhost:8080/birthday-cards';

  constructor(private httpClient: HttpClient) { }

  fetchBirthdayCards() {
     return this.httpClient.get(this.FETCH_BIRTHDAY_CARDS_API);
  }

  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }

    addNewBook(book: { title: string; isbn: string; author: string; picture: string, price: number }){
      return this.httpClient.post(this.ADD_NEW_BOOK_API, book)
    }
    addNewBirthdayCard(birthdaycard: { title: string; material: string; picture: string; price: number; }) {
      return this.httpClient.post(this.ADD_NEW_BIRTHDAYCARD_API, birthdaycard)
    } 
   }

