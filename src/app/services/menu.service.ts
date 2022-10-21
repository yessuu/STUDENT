import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  static getMenu() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getMenu():Observable<any[]>{
    return this.http.get<any[]>('./assets/data/menu.json')
  }
}
