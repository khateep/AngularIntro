import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageSrc: string = '../../../assets/images/home/1.PNG';
  username: string = 'Mohamed Hamdy';
  myColor: string ='darkgray';
  ApplyDarkcyan: boolean = true;

}
