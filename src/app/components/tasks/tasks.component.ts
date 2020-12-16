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
  oldDescriptionValue: string 
  oldTitleValue: string
  oldTempoValue: string
  oldDistanciaValue: string
  oldAlturaValue: string
  oldDificuldadeValue: string

  constructor(private listServ: TaskService) { }

  ngOnInit(): void {
  }

  getPositions($event) {
    this.myTask = this.listServ.getOneTask($event)
    this.taskFound = this.myTask;
    console.log(this.taskFound);
    /* console.log(this.myTask); */
    this.oldTitleValue = this.taskFound.title;
    this.oldDescriptionValue = this.taskFound.description;
    this.oldTempoValue = this.taskFound.tempo;
    this.oldDistanciaValue = this.taskFound.distancia;
    this.oldAlturaValue = this.taskFound.altura;
    this.oldDificuldadeValue = this.taskFound.dificuldade;

  }

  editTask() {
    Swal.fire({
      icon: 'success',
      title: 'Salvou com sucesso!',
      showConfirmButton: false,
      timer: 1300});
    // this.listServ.editTask(this.taskFound)
    //console.log("funcionando!")
  }
  cancelEdit() {
    //console.log("cancelando el beta");
    this.taskFound.title = this.oldTitleValue;
    this.taskFound.description = this.oldDescriptionValue;
    this.taskFound.tempo = this.oldTempoValue;
    this.taskFound.distancia = this.oldDistanciaValue;
    this.taskFound.altura = this.oldAlturaValue;
    this.taskFound.dificuldade = this.oldDificuldadeValue;
  }
}
