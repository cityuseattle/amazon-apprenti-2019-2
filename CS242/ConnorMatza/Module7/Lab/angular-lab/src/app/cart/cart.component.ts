import { Component, OnInit } from '@angular/core';

interface cart {
  [index: number]: {
    id: string;
    name: string;
    qty: number;
    price: number;
  }
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: cart = [
    { id: '1', name:'somestuff', qty: 10, price: 15 },
    { id: '2', name: 'puppy', qty: 100, price: 1000 },
    { id: '3', name: 'hamster', qty: 9999, price: 9999 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
