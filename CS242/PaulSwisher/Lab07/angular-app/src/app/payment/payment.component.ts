import { Component, OnInit } from '@angular/core';

interface customers {
  [index: number]: {
    id: string;
    type: string;
    cardNumber: number;
    isHiddencardNumber: boolean;
  }
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  customers: customers = [
    { id: '1', type: 'Visa', cardNumber: 5555-5555-6666-9999, isHiddencardNumber: false },
    { id: '2', type: 'Mastercard', cardNumber: 1234-5678-9101-1234, isHiddencardNumber: false },
    { id: '3', type: 'Bitcoin', cardNumber: 9800-1223-4455-9000, isHiddencardNumber: true },
  ];

  constructor() { }

  ngOnInit() {
  }

}
