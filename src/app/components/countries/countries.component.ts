import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { StorageService } from '../../services/storage.service';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  public query = '';
  public votes: any;
  public countries: Country[] = [];
  public isLoading = false;

  constructor(private storageService: StorageService, private countriesService: CountriesService) {
    this.votes = this.storageService.getItem('votes') || {};
  }

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries() {
    this.isLoading = true;
    this.countriesService.getCountries()
      .subscribe(data => {
        this.countries = data as Country[];
        this.isLoading = false;

        this.sort();
      });
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
