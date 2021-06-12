import { Component, OnInit } from '@angular/core';
import {SlidersService} from '../../../services/sliders.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private sliderService: SlidersService) { }

  ngOnInit(): void {
    this.sliderService.getSliders().subscribe((res) => {
      console.log(res);
    });
  }

}
