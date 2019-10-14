import { Component, OnInit } from '@angular/core';

interface products {
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

  products: products = [
    { id: '1', name: 'Game Console', qty: 1, price: 400 },
    { id: '2', name: 'Games', qty: 5, price: 30 },
    { id: '3', name: 'Controllers', qty: 2, price: 50 },
    { id: '4', name: 'Cables', qty: 3, price: 15 },
    { id: '5', name: 'Case', qty: 1, price: 40 },
];

  constructor() { }

  ngOnInit() {
  }

}
