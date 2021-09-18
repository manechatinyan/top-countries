import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  public filter: any = '';
  public query: string = '';

  countries: Country[] = [
    {
      name: 'United States Minor Outlying Islands',
      capital: '',
    },
    {
      name: 'Tanzania, United Republic of',
      capital: 'Dodoma',
    },
    {
      name: 'United Arab Emirates',
      capital: 'Abu Dhabi',
    },
    {
      name: 'United Kingdom of Great Britain and Northern Ireland',
      capital: 'London',
    },
    {
      name: 'United States of America',
      capital: 'Washington, D.C.',
    },
    {
      name: 'Mexico',
      capital: 'Mexico City',
    },
  ];
}
