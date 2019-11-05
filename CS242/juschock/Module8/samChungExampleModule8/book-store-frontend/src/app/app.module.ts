import { BrowserModule }           from '@angular/platform-browser';

import { NgModule }                from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule }          from '@angular/material';
import { MatFormFieldModule }      from '@angular/material/form-field';
import { MatToolbarModule }        from '@angular/material/toolbar';
import { MatButtonModule }         from '@angular/material/button';
import { MatMenuModule }           from '@angular/material/menu';
import { MatSnackBarModule }       from '@angular/material/snack-bar';

import { FormsModule }             from "@angular/forms";

/*
  Before you can use the HttpClient, you need to import 
  the Angular HttpClientModule in the root AppModule.
*/
import { HttpClientModule }        from '@angular/common/http';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
