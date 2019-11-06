import { Component, OnInit } from '@angular/core';

interface payment {
  [index: number]: {
    id: string;
    cardNumber: number;
    cvv: number;
    expiry: number;
  }
}
@Component({
  selector: 'app-cart',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment: payment = [
    { id: '1', cardNumber: 8990899089908990, cvv: 100, expiry: 1599 },
    { id: '1', cardNumber: 1234123412341234, cvv: 100, expiry: 1599 },
    { id: '1', cardNumber: 1234123412341234, cvv: 100, expiry: 1599 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
