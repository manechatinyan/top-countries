import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getItem(key: any): any {
    let data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public setItem(key: any, data: any): void {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
}
