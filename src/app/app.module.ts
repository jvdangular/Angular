import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, CountryComponent, StateComponent]
})
export class AppModule { }
