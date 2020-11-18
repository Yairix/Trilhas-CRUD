import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  myTask
  taskFound

  constructor(private listServ: TaskService) { }

  ngOnInit(): void {
  }

  getPositions($event) {
    this.myTask = this.listServ.getOneTask($event)
    this.taskFound = this.myTask
  }

  editTask() {
    this.listServ.editTask(this.taskFound)
  }
}
