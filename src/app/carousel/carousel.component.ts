import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent{

   customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      10: {
        items: 1
      },
      400: {
        items: 2
      },
      800: {
        items: 3
      },
    },
    nav: true,
    center: true
  };
}
