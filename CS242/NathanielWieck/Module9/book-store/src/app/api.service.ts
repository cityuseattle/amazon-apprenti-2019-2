// BRIDGE - this file defines how frontend connects to backend, through implementation in indvidual webpage component.ts files
import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// this entire ApiService class below, inlcuding functions, is imported by webpage component.ts files
// builds the required structure to send information from frontend to backend, and where to send that information
export class ApiService {
  // define backend destination url to send request to add data to database, including kind of request and data to be added
  // specific port of backend server is defined in the .env file in the backend src folder
  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';
  private ADD_NEW_CARD_API = 'http://localhost:8080/birthdayCard';
  private FETCH_BOOKS_API = 'http://localhost:8080/books';

  // basic constructor for an HttpClient request, so can use object functions like "post" and specify function behavior like below
  constructor(private httpClient: HttpClient) { }

  // function to take desired user input and build HttpClient request with "post" function below
  // "post" function has two parameter requirements: url destination, and object (built from user input)
  // exact function names below must match call when implemented in specific webpage component.ts files!
  // if use .post() method here, then also must use .post() method in backend of app.ts file
  addNewBook(book: { title: string; isbn: string; author: string; picture: string, price: number }) {
    return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
  }

  addNewBirthCard(card: { title: string; material: string, picture: string; price: number; }) {
    return this.httpClient.post(this.ADD_NEW_CARD_API, card);
  }

  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }
}