import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  public query = '';
  public votes: any;
  public countries: Country[] = [
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

  constructor(private storageService: StorageService) {
    this.votes = this.storageService.getItem('votes') || {};
  }

  ngOnInit(): void {
    this.sort();
   }

  public voted(votes: any): void {
    this.votes = votes;
    this.storageService.setItem('votes', this.votes);
    this.sort();
  }

  private sort(): void {
    this.countries.sort((a, b) => {
      let voteA = this.votes[a.name] || {sum: 0, timestamp: 0};
      let voteB = this.votes[b.name] || {sum: 0, timestamp: 0};

      return voteB.sum - voteA.sum || voteB.timestamp - voteA.timestamp;
    });
  }
}
