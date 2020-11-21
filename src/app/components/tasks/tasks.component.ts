import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import  Swal  from 'sweetalert2';

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
    Swal.fire({
      icon: 'success',
      title: 'Salvou com sucesso!',
      showConfirmButton: false,
      timer: 1300});
    this.listServ.editTask(this.taskFound)
    //console.log("funcionando!")
  }
  cancelEdit() {
    console.log("cancelando el beta")// Falta la función para que no guarde los cambios
  }
}
