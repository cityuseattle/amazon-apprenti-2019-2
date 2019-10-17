import { Component, OnInit } from '@angular/core';

interface Customers {
  [index: number]: {
    id: string;
    username: string;
    email: string;
    isHiddenEmail: boolean;
  };
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customers = [
    { id: '1', username: 'customerA', email: 'customerA@bookstore.com', isHiddenEmail: false },
    { id: '1', username: 'customerB', email: 'customerB@bookstore.com', isHiddenEmail: true },
    { id: '1', username: 'customerC', email: 'customerC@bookstore.com', isHiddenEmail: false },
      ];
  constructor() { }
  ngOnInit() {
  }

}
