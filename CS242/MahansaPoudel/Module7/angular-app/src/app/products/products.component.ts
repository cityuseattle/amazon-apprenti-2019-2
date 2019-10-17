import { Component, OnInit } from '@angular/core';

interface Products {
  [index: number]: {
    id: string;
    name: string;
    qty: number;
    price: number;
  };
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products = [
{ id: '1', name: 'Eloquent Javascript', qty: 10, price: 0},
{ id: '2', name: 'Javascript: The Good Parts', qty: 30, price: 30},
{ id: '3', name: 'Javascript: The Definitive Guide', qty: 13, price: 20},
{ id: '4', name: 'Secrets of the JavaScript Ninja', qty: 12, price: 46},
{ id: '5', name: 'THe principles of Object-Oriented Javascript', qty: 11, price: 34},
  ];
constructor() { }

ngOnInit() {
  }

}
