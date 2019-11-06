import { Component, OnInit } from '@angular/core';

interface products {
  [index: number] : {
    id: string;
    name: string;
    qty: number;
    price: number;
  }
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: products = [
  {id: '1', name: 'Eloquent Javascript', qty: 10, price: 0 },
  {id: '2', name: 'Javascript: The Good Parts', qty: 30, price: 30 },
  {id: '3', name: 'Javascript: The Difinitive Guide', qty: 13, price: 20},
  {id: '4', name: 'Secrets of the JavaScript Ninja', qty: 13, price: 46},
  {id: '5', name: 'The Principles of Object-Oriented Programming', qty: 11, price: 34},
];
  constructor() { }

  ngOnInit() {
  }

}
