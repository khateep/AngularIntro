import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  isAccepted: boolean = true;
  changeState() {
    this.isAccepted = !this.isAccepted;
  }
  tracks: string[] = ['.Net', 'MEARN', 'PHP', 'Fundmentals'];
  track: string = 'PHdP';
}
