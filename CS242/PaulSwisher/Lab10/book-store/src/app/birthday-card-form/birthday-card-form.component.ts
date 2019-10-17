import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';
import { Birthdaycard } from '../birthdaycards/birthdaycards.component';
@Component({
  selector: 'app-birthday-card-form',
  templateUrl: './birthday-card-form.component.html',
  styleUrls: ['./birthday-card-form.component.css']
})
export class BirthdayCardFormComponent implements OnInit {
  private birthdaycardId: string;
  private title: string = '';
  private material: string = '';
  private picture: string = '';
  private price: number = 0;
  static URL_REGEXP = /^http(s*):\/\/.+/;
  static BIRTHDAYCARDS_PAGE = '/birthdaycard';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apiService: ApiService,
  ) { }
  ngOnInit() {
    // Get the url pramater
    this.birthdaycardId = this.route.snapshot.paramMap.get('id');
    
    if (this.birthdaycardId) this.apiService.fetchBirthdaycard(this.birthdaycardId).subscribe((data: Birthdaycard[]) => {
      if (data.length !== 0 ) {
        this.title = data[0].title;
        this.material = data[0].material;
        this.price = data[0].price;
        this.picture = data[0].picture;
        } else this.birthdaycardId = null;  
        });
      }
  

  handleSave() {
    let message: string;
    // If the the form input values are invalid, show a snackbar
    if (this.title === '')
      message = 'Please finish the form' ;
    else if (!BirthdayCardFormComponent.URL_REGEXP.test(this.picture))
      message = 'The picture should start as http:// or https://';
    else if (this.price < 0 )
      message = 'Please enter a price equal or greater than 0.'
      // Call the add book API and reset all form input vaules
      else {
      message = 'Card is added.';
      this.apiService.addOrUpdateBirthdaycard({
        title: this.title, material: this.material, 
        picture: this.picture, price: this.price, _id: this.birthdaycardId, 
      }).subscribe(() => {
      this.title = '';
      this.material = '';
      this.picture = '';
      this.price = 0;
      this.birthdaycardId =null;
      this.router.navigate([BirthdayCardFormComponent.BIRTHDAYCARDS_PAGE]);
    });
  
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }}
}
