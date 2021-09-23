import { Component, OnInit, HostListener } from '@angular/core';
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
  public paginationData = {
    itemsPerPage: 20,
    page: 1
  };
  public showCount!: number;

  constructor(private storageService: StorageService, private countriesService: CountriesService) {
    this.votes = this.storageService.getItem('votes') || {};
    this.paginate();
  }

  @HostListener('window:scroll', ['$event']) private onScroll($event: Event): void {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.paginationData.page++;
      this.paginate();
    }
  };

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries() {
    this.isLoading = true;
    this.countriesService.getCountries()
      .subscribe((data: any) => {
        this.countries = data.data as Country[];
        this.countries.forEach(country => {
          country.vote = this.votes[country.name];
        });
        this.isLoading = false;
        this.paginate();
      });
  }

  public voted(country: Country): void {
    this.votes[country.name] = country.vote;
    this.countries = [...this.countries];
    this.storageService.setItem('votes', this.votes);
  }

  private paginate(): void {
    this.showCount = this.paginationData.page * this.paginationData.itemsPerPage;
  }
}
