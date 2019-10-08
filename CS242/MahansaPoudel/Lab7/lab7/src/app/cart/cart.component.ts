import { Component, OnInit } from '@angular/core';

interface Cart {
  [index: number]: {
    id: string;
    name: string;
    price: number;
    qty: number;
  };
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = [
    { id: '1', name: 'Milk', price: 5, qty: 2},
    { id: '2', name: 'Bread', price: 2, qty: 3},
    { id: '3', name: 'Icecream', price: 20, qty: 5},
    { id: '4', name: 'Steak', price: 100, qty: 5},
    { id: '5', name: 'Rice', price: 50, qty: 2},
      ];
  constructor() { }

  ngOnInit() {
  }

}
