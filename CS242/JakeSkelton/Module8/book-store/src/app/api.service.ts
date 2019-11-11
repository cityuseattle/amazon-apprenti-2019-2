import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';

  constructor() {private httpClient: HttpClient} { }

  addNewBook(book: { title: String, isbn: String, author: String, picture: String, price: Number}) { 
    return this.httpClient.post(this.ADD_NEWBOOK_API, book);
  }
}


