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
    { id: '1', name: 'Wilson fastpitch bat', qty: 1, price: 150 },
    { id: '2', name: 'Ringor cleats', qty: 1, price: 90 },
    { id: '3', name: 'Wilson fastpitch glove', qty: 1, price: 75 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
