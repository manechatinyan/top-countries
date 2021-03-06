import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/countries/country/country.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { VotingComponent } from './components/voting/voting.component';
import { HttpClientModule } from '@angular/common/http';
import { VotingSortPipe } from './pipes/voting-sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent,
    FilterPipe,
    VotingComponent,
    VotingSortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
