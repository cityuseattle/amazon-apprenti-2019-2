import { Component, OnInit } from '@angular/core';

interface payment {
  [index: number]: {
    id: string;
    name: string;
    qty: number;
    price: number;
  }
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  products: payment = [
    { id: '1', name: 'Eloquent JavaScript', qty: 10, price: 0 },
    { id: '2', name: 'JavaScript: The Good Parts', qty: 30, price: 30 },
    { id: '3', name: 'JavaScript: The Definitive Guide', qty: 13, price: 20 },
    { id: '4', name: 'Secrets of the JavaScript Ninja', qty: 12, price: 46 },
    { id: '5', name: 'The Priniciples of Object-Oriented JavaScript', qty: 11, price: 34 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
