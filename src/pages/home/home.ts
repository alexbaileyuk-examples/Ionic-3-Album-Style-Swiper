import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slider') slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  ngAfterViewInit() {
    console.log('Screen4 Page');
    this.slides.effect = 'coverflow';
    this.slides.centeredSlides = true;
        this.slides.slidesPerView = 'auto';
        this.slides.initialSlide = 1;

    this.slides.coverflow = {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false
        };
    console.log(this.slides.length);
  }

}
