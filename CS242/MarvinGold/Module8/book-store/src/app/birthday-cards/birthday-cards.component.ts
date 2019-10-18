import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BirthdayCardDetailDialogComponent } from '../birthday-card-detail-dialog/birthday-card-detail-dialog.component';
import { ApiService } from '../api.service';

export interface Card {
  _id: string; title: string; material: string; picture: string; price: number;
}
@Component({
  selector: 'app-birthday-cards',
  templateUrl: './birthday-cards.component.html',
  styleUrls: ['./birthday-cards.component.css']
})
export class BirthdayCardsComponent implements OnInit {
  private cards: Array<Card>;
  private cardsObject: {
    [id: string]: Card;
  };

  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.fetchCards().subscribe((data: Array<Card>) => {
      this.cards = data;
      this.cardsObject = this.cards.reduce((obj, card) => {
        obj[card._id] = card;
        return obj;
      }, {});
    });
  }
openDialog(id: string): void {
  this.dialog.open(BirthdayCardDetailDialogComponent, {
    width: '350px',
    data: this.cardsObject[id],
  });
}
delete(id: string) : void {
  delete this.cardsObject[id];
  this.cards = this.cards.filter((card) => card._id !== id);
  this.apiService.deleteCard(id).subscribe();
}
}
