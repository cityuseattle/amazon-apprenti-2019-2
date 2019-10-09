import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from '../cards/cards.component';

@Component({
    selector: 'app-card-detail-dialog',
    templateUrl: './card-detail-dialog.component.html',
    styleUrls: ['./card-detail-dialog.component.css']
})
export class CardDetailDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<CardDetailDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Card) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
}