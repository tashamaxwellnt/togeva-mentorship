import { Component, } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <h2>{{title}}</h2>

    <input [value]="buttonValue" type="submit" (click)="toggleMood()">
    <div *ngIf="isHappy">
      <p>Hello, i am happy</p>
    </div>

    <h3>Friends</h3>
    <div *ngFor="let friend of friends; let i = index">
      <h4>{{i+ 1 + '. ' + friend}}</h4>
    </div>
  `,
  styles: ``
})
export class HomeComponent {
  title = 'Togeva Angular';

  isHappy = false;

  toggleMood(){
    this.isHappy = !this.isHappy;
  }

  buttonValue = 'Click me!';
  friends: string[] = ['Gojo', 'Jinwoo', 'Dasai'];
}
