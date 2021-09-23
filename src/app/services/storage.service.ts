import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getItem(key: any): any {
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public setItem(key: any, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
