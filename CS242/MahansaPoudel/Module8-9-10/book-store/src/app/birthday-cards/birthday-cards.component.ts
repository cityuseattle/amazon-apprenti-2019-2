import { Component, OnInit } from '@angular/core';
import { BirthdayCardDetailDialogComponent } from './../birthday-card-detail-dialog/birthday-card-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
export interface BirthdayCard {
  _id: string; title: string; material: string; price: number; picture: string;
}
@Component({
  selector: 'app-birthday-cards',
  templateUrl: './birthday-cards.component.html',
  styleUrls: ['./birthday-cards.component.css']
})
export class BirthdayCardsComponent implements OnInit {

  public birthdayCards: Array<BirthdayCard>;
  private birthdayCardsObject: {
    [id: string]: BirthdayCard;
  };
  constructor(private dialog: MatDialog, private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.fetchBirthdayCards().subscribe((data: Array<BirthdayCard>) => {
      this.birthdayCards = data;
      // Transfer the book array to an object to speed up the look up
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
    // Remove the book data from two internal data sources
    delete this.birthdayCardsObject[id];
    this.birthdayCards = this.birthdayCards.filter((birthdayCard) => birthdayCard._id !== id);
    this.apiService.deleteBirthdayCard(id).subscribe();
  }
}
