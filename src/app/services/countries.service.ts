import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpService: HttpService) { }

  public getCountries() {
    return this.httpService.get('?fields=name;capital');
  }
}
