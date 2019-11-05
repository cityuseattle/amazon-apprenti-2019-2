import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BirthdayCard } from '../birthday-cards/birthday-cards.component';

@Component({
  selector: 'app-birthday-cards-detail',
  templateUrl: './birthday-cards-detail.component.html',
  styleUrls: ['./birthday-cards-detail.component.css']
})
export class BirthdayCardsDetailComponent implements OnInit {

  constructor(
  public dialogRef: MatDialogRef<BirthdayCardsDetailComponent>,
  @Inject(MAT_DIALOG_DATA) public data: BirthdayCard
) {};

onNoClick(): void {
  this.dialogRef.close();
}


  ngOnInit() {
  }

}
