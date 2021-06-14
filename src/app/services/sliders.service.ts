import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {SliderModel} from '../model/slider.model';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {
  private slider: BehaviorSubject<SliderModel[]> = new BehaviorSubject<SliderModel[]>(null);

  constructor(private http: HttpClient) { }

  public getSliders(): Observable<SliderModel[]> {
    return this.http.get<SliderModel[]>('http://localhost:3000/slider');
  }

  public getCurrentSlider() {
    return this.slider;
  }

  public setSliders(slider) {
    return this.slider.next(slider);
  }

}
