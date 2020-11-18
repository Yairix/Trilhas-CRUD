import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Taks';
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  @Output() sendPosition = new EventEmitter;

  myTasks: Task[];

  constructor(private listServ: TaskService) { }

  ngOnInit(): void {
    this.myTasks = this.listServ.getTask()
    console.log("My tasks: ", this.myTasks)
  }

  deleteTask(_id){
    this.listServ.deleteTask(_id);
  }

  getPositions(_id) {
    this.sendPosition.emit(_id)
  }

}
