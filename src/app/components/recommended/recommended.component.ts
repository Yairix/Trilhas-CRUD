import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Taks';
import { TaskService } from '../../services/task.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  @Output() sendPosition = new EventEmitter;

  myTasks
  tasks: any
  recomendTasks
  TrilhasRecomend

  constructor(private listServ: TaskService) {
    /* listServ.getTask().subscribe(tasks => {
      this.recomendTasks = tasks;
      console.log(this.tasks.Tasks)
    }) */
   }
  ngOnInit(): void {
    this.recomendTasks = this.listServ.getTaskRecomend()
    console.log("My tasks: ", this.recomendTasks)
  }

  salvada(_id) {
    Swal.fire({
      icon: 'success',
      title: 'Salvou com sucesso em Meu destinos!',
      showConfirmButton: false,
      timer: 1300});
      this.listServ.addTask(this.recomendTasks[_id-1]).subscribe(Trilhas => {
        this.TrilhasRecomend = Trilhas;
        console.log(Trilhas);
        console.log(this.TrilhasRecomend)
        console.log(this.recomendTasks[_id-1])
      });

  }
  
}
