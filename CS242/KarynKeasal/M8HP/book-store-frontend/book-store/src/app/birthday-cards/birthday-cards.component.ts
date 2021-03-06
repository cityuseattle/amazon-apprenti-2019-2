import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BirthdayCardDetailDialogComponent } from '../birthday-card-detail-dialog/birthday-card-detail-dialog.component';
import { ApiService } from '../api.service';

export interface BirthdayCard {
  _id: string; title: string; material: string; picture: string; price: number;
}

@Component({
  selector: 'app-birthday-cards',
  templateUrl: './birthday-cards.component.html',
  styleUrls: ['./birthday-cards.component.css']
})
export class BirthdayCardsComponent implements OnInit {
  private birthdayCards: Array<BirthdayCard>;
  private birthdayCardsObject: {
    [id: string]: BirthdayCard;
  };

  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.fetchBirthdayCards().subscribe((data: Array<BirthdayCard>) => {
      this.birthdayCards = data;
      this.birthdayCardsObject = this.birthdayCards.reduce((obj, birthdayCard) => {
        obj[birthdayCard._id] = birthdayCard;
        return obj;
    }, {});
    });
  }

  openDialog(id: string): void {
    this.dialog.open(BirthdayCardDetailDialogComponent, {
      width: '350px',
      data: this.birthdayCardsObject[id],
    });
  }
  delete(id: string): void {
    delete this.birthdayCardsObject[id];
    this.birthdayCards = this.birthdayCards.filter((birthdayCard) => birthdayCard._id !== id );
    this.apiService.deleteBirthdayCard(id).subscribe();
  }
}
