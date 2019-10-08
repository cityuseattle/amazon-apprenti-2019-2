import { Component, OnInit } from '@angular/core';

interface Payment {
  [index: number]: {
    id: string;
    cardNumber: string;
    type: string;
    isHiddenNumber: boolean;
  };
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment: Payment = [
    { id: '1', cardNumber: '11234456', type: 'credit', isHiddenNumber: true  },
    { id: '1', cardNumber: '17789445', type: 'paypal', isHiddenNumber: true},
    { id: '1', cardNumber: '11212344', type: 'debit', isHiddenNumber: true},
    { id: '1', cardNumber: '77894462', type: 'credit', isHiddenNumber: true},
    { id: '1', cardNumber: '24776463', type: 'debit', isHiddenNumber: true},
      ];
  constructor() { }

  ngOnInit() {
  }

}
