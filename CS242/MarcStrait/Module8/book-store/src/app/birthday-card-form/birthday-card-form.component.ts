import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ApiService } from '../api.service';
import { BirthdayCards } from '../birthday-cards/birthday-cards.component';

@Component({
  selector: 'app-birthday-card-form',
  templateUrl: './birthday-card-form.component.html',
  styleUrls: ['./birthday-card-form.component.css']
})
export class BirthdayCardFormComponent implements OnInit {
  private cardId: string;
  private title: string = '';
  private material: string = '';
  private picture: string = '';
  private price: number = 0;
  static URL_REGEXP = /^http(s*):\/\/.+/;
  static CARDS_PAGE = 'birthdaycards';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
        // Get the url pramater
        this.cardId = this.route.snapshot.paramMap.get('id');
        // Load the card data from the database if a card id is passed
        if (this.cardId) this.apiService.fetchBirthdayCard(this.cardId).subscribe((data: BirthdayCards[]) => {
          if (data.length !== 0) {
            this.title = data[0].title;
            this.material = data[0].material;
            this.price = data[0].price;
            this.picture = data[0].picture;
          } else this.cardId = null;
        });
      }

  handleSave() {
    let message: string;
    // If the the form input values are invalid, show a snackbar
    if (this.title === '' || this.material === '')
      message = 'Please finish the form.';
    else if (!BirthdayCardFormComponent.URL_REGEXP.test(this.picture))
      message = 'The picture should be start as http:// or https://';
    else if (this.price < 0)
      message = 'Please offer a price equal or greater than 0.'
    else {
      // Call the add book API and reset all form input vaules
      message = 'Birthday Card has been added.';
      this.apiService.addOrUpdateBirthdayCard({
        title: this.title, material: this.material, picture: this.picture, price: this.price, _id: this.cardId
      }).subscribe(() => {
        this.title = '';
        this.material = '';
        this.picture = '';
        this.price = 0;
        this.cardId = null;
        this.router.navigate([BirthdayCardFormComponent.CARDS_PAGE]);
      });
    }
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }
}
