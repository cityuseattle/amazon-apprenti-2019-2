import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_BOOK_API = 'http://localhost:8080/book';

  constructor(private httpClient: HttpClient) { }

  addNewBook(book: { title: string; isbn: string; author: string; picture: string, price: number }) {
    
  }
} 

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
