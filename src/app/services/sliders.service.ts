import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  constructor(private http: HttpClient) { }

  public getSliders(): Observable<object> {
    return this.http.get<object>('http://localhost:3000/slider');
  }

}
