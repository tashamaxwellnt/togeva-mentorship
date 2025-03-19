import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MomlDirective } from '../moml.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgFor, NgIf, MomlDirective],
  templateUrl: './directives.component.html',
  styles: ``
})
export class DirectivesComponent implements OnInit {
  color = '';
  tasks: Task[] = [
    {
      title: 'Task1',
      status: 'todo'
    },
    {
      title: 'Task2',
      status: 'complete'
    },
    {
      title: 'Task3',
      status: 'todo'
    },
    {
      title: 'Task4',
      status: 'complete'
    },
    {
      title: 'Task5',
      status: 'todo'
    },
    {
      title: 'Task6',
      status: 'complete'
    }
  ];

  styles: Record<string, string> = {};

  ngOnInit(){
    this.styles = {
      status: 'todo', 
    }
  }


}

interface Task {
  title: string
  status: string
}
