import { Component, OnInit } from '@angular/core';
import {SlidersService} from '../../../services/sliders.service';
import {SliderModel} from '../../../model/slider.model';
import {DomainName} from '../../../utils/pathTools';

declare function homeSlider(): any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderData: SliderModel[];
  domain: string = DomainName;

  constructor(private sliderService: SlidersService) { }

  ngOnInit(): void {
    this.sliderService.getCurrentSlider().subscribe((resp) => {
      console.log(resp);
      if (resp === null) {
        this.sliderService.getSliders().subscribe((sliders) => {
          this.sliderService.setSliders(sliders);
        });
      } else {
        this.sliderService.getCurrentSlider().subscribe((sliders) => {
          this.sliderData = sliders;
          setInterval(() => {
            homeSlider();
          }, 100);
        });
      }
    });
  }

}
