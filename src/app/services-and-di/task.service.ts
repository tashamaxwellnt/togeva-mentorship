import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = signal<string[]>([]) ;

  constructor() { }

  addTask(task: string){
    this.tasks.update(value => [...value, task]);
  }

  removeTask(index: number){
    let tasks = this.tasks();
    tasks.splice(index, 1);
    this.tasks.set(tasks);
  }
}
