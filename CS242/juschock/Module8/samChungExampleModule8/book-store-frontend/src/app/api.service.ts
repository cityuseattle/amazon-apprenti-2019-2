import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Providing Services:
  When you provide the services at the root level, 
  Angular creates a single, shared instance of the service and 
  injects it into any class that asks for it.
*/
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';

  /*
    Inject httpClient.
  */
  constructor(private httpClient: HttpClient) { }

  /*
    RESTful API - post
  */
  addNewBook(book: {title: string, isbn: string, author: string, picture: string, price: number}) {
    return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
  }
}

