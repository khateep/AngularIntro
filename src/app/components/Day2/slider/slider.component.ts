import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnDestroy {
  imagesUrls: string[] = [
    '../../../assets/images/home/slider.jpg',
    '../../../assets/images/home/slider2.jpg',
    '../../../assets/images/home/slider3.jpg',
    '../../../assets/images/home/slider4.jpg'
  ];
  currentImage: string = this.imagesUrls[0];
  counter: number = 0;
  intervalId: any;

  next() {
    this.counter++;
    if (this.counter === this.imagesUrls.length) this.counter = 0;
    this.currentImage = this.imagesUrls[this.counter];
  }

  previous() {
    this.counter--;
    if (this.counter < 0) this.counter = this.imagesUrls.length - 1;
    this.currentImage = this.imagesUrls[this.counter];
  }

  play() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 2000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  ngOnDestroy() {

    clearInterval(this.intervalId);
  }
}
