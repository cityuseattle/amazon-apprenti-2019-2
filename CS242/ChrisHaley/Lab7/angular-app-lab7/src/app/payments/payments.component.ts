import { Component, OnInit } from '@angular/core';

interface payments {
  [ index: number ]: {
    id: string;
    cardNumber: number;
    type: string;
    isHiddenPayment: boolean;
  }
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  payments: payments = [
    { id: '1', cardNumber: 2323435678900087, type: 'Credit Card', isHiddenPayment: true },
    { id: '2', cardNumber: 9987692834729384, type: 'PayPal', isHiddenPayment: false },
    { id: '3', cardNumber: 1005027448273, type: 'Bank Account', isHiddenPayment: true },
    { id: '4', cardNumber: 9999239394349239, type: 'Amazon Payments', isHiddenPayment: true },
];

  constructor() { }

  ngOnInit() {
  }

}
