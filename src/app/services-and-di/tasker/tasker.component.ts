import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasker.component.html',
  styleUrl: './tasker.component.css'
})
export class TaskerComponent {
  
  taskService = inject(TaskService);
  task = "";

  get tasks(): string[] {
    return this.taskService.tasks()
  }

  addTask(){
    console.log(this.task);
    
    this.taskService.addTask(this.task);
    this.task = "";
  }

  remove(index: number){
    this.taskService.removeTask(index);
  }
}
