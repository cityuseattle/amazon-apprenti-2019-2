import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
//exported from api.service.ts file, allows frontend to connect to backend here
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
// imported into app-routing.module.ts, class name defined here must match there... BUT WHY, IS OBJECT IN JS CREATED FROM HTML INPUT?
export class CardFormComponent implements OnInit {
  private cardId: string;
  private title: string = '';
  private material: string = '';
  private picture: string = '';
  private price: number = 0;
  static URL_REGEXP = /^http(s*):\/\/.+/;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    // Get the url paramater
    this.cardId = this.route.snapshot.paramMap.get('id');
  }

  // specified in corresponding HTML file for webpage to run this funtion (when button is clicked)
  handleSave() {
    let message: string;
    // If the the form input values are invalid, show a snackbar
    if (this.title === '' || this.material === '')
      message = 'Please finish the form.';
    // FROM CARDFORMCOMPONENT functions defined above, and exported / routed to specific URL
    else if (!CardFormComponent.URL_REGEXP.test(this.picture))
      message = 'The picture should be start as http:// or https://';
    else if (this.price < 0 )
      message = 'Please offer a price equal or greater than 0.'
    else {
      // Call the add book API and reset all form input vaules
      message = 'Card is added.';
      // FROM CARDFORMCOMPONENT functions defined above, and exported /routed to specific URL
      // this apiService.FUNCTION_NAME_HERE below must match exact function name as defined in api.service.ts file!
      // .subscribe() methods actually sends the final HttpClient request to backend with attached information
      // title, material, picture, price etc these variables contain data from user input as defined in corresponding .html file
      this.apiService.addNewBirthCard({
        title: this.title, material: this.material, picture: this.picture, price: this.price,
      }).subscribe();
      this.title = '';
      this.material = '';
      this.picture = '';
      this.price = 0;
    }
    this._snackBar.open(message, 'Close', { duration: 2000 });
  }
}