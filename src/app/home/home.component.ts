import { Component, OnInit, } from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgStyle, FormsModule],
  template: `
    <h2 [ngClass]="mood">{{title}}</h2>

    <input [ngClass]="isSpecial ? 'special' : ''"  [value]="buttonValue" type="submit" (click)="toggleMood()" (click)="setStyles()">
    <div *ngIf="isHappy">
      <p>Hello, i am happy</p>
    </div>

    <h2 [ngStyle]="styles">This is a h2 heading</h2>

    <h3>Friends</h3>
    <div *ngFor="let friend of friends; let i = index">
      <h4>{{i+ 1 + '. ' + friend}}</h4>
    </div>

    <input type="text" [(ngModel)]="name" ><br>
    {{name}}

  `,
  styles: `
    .happy {
      color: green;
    }
    .angry {
      color: red;
    }
    .moody {
      font-style: italic;
    }
  `
})
export class HomeComponent implements OnInit {
  title = 'Togeva Angular';
  isHappy = false;
  isSpecial = true;
  mood: Record<string, boolean> = {};
  styles: Record<string, string> = {};
  name: string = "";

  setStyles(){
    this.styles = {
      'color': this.isHappy ? 'purple' : 'pink',
      'font-size': '40px'
    }
  }

  ngOnInit(): void {
    this.setStyles();
  }

  setMood(){
    this.mood = {
      happy: this.isHappy,
      angry: !this.isHappy,
      moody: true
    }
  }

  toggleMood(){
    this.isHappy = !this.isHappy;
  }

  buttonValue = 'Click me!';
  friends: string[] = ['Gojo', 'Jinwoo', 'Dasai'];
}
