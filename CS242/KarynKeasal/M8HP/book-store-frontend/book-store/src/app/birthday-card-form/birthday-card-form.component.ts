import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';
import { BirthdayCard } from '../birthday-cards/birthday-cards.component';

@Component({
  selector: 'app-birthday-card-form',
  templateUrl: './birthday-card-form.component.html',
  styleUrls: ['./birthday-card-form.component.css']
})
export class BirthdayCardFormComponent implements OnInit {
  private birthdayCardId: string;
  private title: string = '';
  private material: string = '';
  private picture: string = '';
  private price: number = 0;
  static URL_REGEXP = /^http(s*):\/\/.+/;
  static BIRTHDAY_CARDS_PAGE = 'birthdaycards';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.birthdayCardId = this.route.snapshot.paramMap.get('id');
    if (this.birthdayCardId) this.apiService.fetchBirthdayCard(this.birthdayCardId).subscribe((data: BirthdayCard[]) => {
      if (data.length !== 0 ) {
        this.title = data[0].title;
        this.material = data[0].material;
        this.picture = data[0].picture;
        this.price = data[0].price;
      } else this.birthdayCardId = null;
    });
  }

  handleSave() {
    let message: string;
    if (this.title === '' || this.material === '')
      message = 'Please finish the form.';
    else if (!BirthdayCardFormComponent.URL_REGEXP.test(this.picture))
      message = 'The picture should start with http:// or https://';
    else if (this.price < 0)
      message = 'Please enter an amount greater than zero.'
    else {
      message = 'Card is added successfully.';
      this.apiService.addOrUpdateBirthdayCard({
        title: this.title, material: this.material, picture: this.picture, price: this.price, _id: this.birthdayCardId,
      }).subscribe(() => {
      this.title = '';
      this.material = '';
      this.picture = '';
      this.price = 0;
      this.birthdayCardId = null;
      this.router.navigate([BirthdayCardFormComponent.BIRTHDAY_CARDS_PAGE]);
      });
    }
    this._snackBar.open(message, 'Close', {duration: 2000 });
  }
}
