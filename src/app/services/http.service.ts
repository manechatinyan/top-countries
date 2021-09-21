import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public apiUrl = Config.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public get(url: string) {
    return this.httpClient.get(this.apiUrl + url);
  }
}