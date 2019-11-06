import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BirthdayCards } from '../birthday-cards/birthday-cards.component';

@Component({
  selector: 'app-birthday-cards-dialog',
  templateUrl: './birthday-cards-dialog.component.html',
  styleUrls: ['./birthday-cards-dialog.component.css']
})
export class BirthdayCardsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BirthdayCardsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BirthdayCards) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
