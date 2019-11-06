import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../books/books.component';

@Component({
  selector: 'app-book-deail-dialog',
  templateUrl: './book-deail-dialog.component.html',
  styleUrls: ['./book-deail-dialog.component.css']
})
export class BookDeailDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BookDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
