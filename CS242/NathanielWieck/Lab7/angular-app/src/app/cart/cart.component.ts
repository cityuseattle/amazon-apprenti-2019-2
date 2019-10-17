import { Component, OnInit } from '@angular/core';

interface cart {
  [index: number]: {
    id: string;
    name: string;
    price: number;
    qty: number;
  }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cart: cart = [
    { id: '1', name: 'Doggy', price: 100, qty: 3 },
    { id: '2', name: 'Kitty', price: 50, qty: 6 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
