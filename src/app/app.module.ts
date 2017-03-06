import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireOfflineModule } from 'angularfire2-offline';

import { AppComponent } from './app.component';
export const firebaseConfig = {
    apiKey: "AIzaSyC7e3k3s-54GhArBhds2nZqtV2ojSponHs",
    authDomain: "daily-milk-and-news.firebaseapp.com",
    databaseURL: "https://daily-milk-and-news.firebaseio.com",
    storageBucket: "daily-milk-and-news.appspot.com",
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireOfflineModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
