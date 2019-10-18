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
  { id: '1', name: 'Banana', qty: 1, price: 1},
  { id: '2', name: 'Chair', qty: 1, price: 15 },
  { id: '3', name: 'Horse Meat', qty: 1, price: 3 },
  { id: '4', name: 'Duct Tape', qty: 1, price: 6 },
  { id: '5', name: 'Toothbrush', qty: 4, price: 1 },
  { id: '6', name: 'Oil', qty: 1, price: 12 },
  { id: '7', name: 'Cup', qty: 2, price: 7 },
  { id: '8', name: 'Coffee', qty: 9, price: 9 },
];
  constructor() { }

  ngOnInit() {
  }

}
