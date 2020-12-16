import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Taks';
import { TaskService } from '../../services/task.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

recomendTasks: Task[];
myId = 1;
newTask = {
  id: this.myId,
  title: "",
  description: "",
  imagen: "",
  tempo: "",
  distancia: "",
  altura: "",
  dificuldade: "",
}
  constructor(private listServ: TaskService) { }

  ngOnInit(): void {
    this.recomendTasks = this.listServ.getTask()
    console.log("My tasks: ", this.recomendTasks)
  }
  
  
  /* addTask() {
    console.log("we will send the data", this.newTask);
    this.listServ.addTask(this.newTask)
    this.newTask = {
      title: "",
      description: "",
      imagen: "",
      tempo: "",
      distancia: "",
      altura: "",
      dificuldade: "",
      //TaskList.push(newTask)
    }
    Swal.fire({
      icon: 'success',
      title: 'O Destino foi salvado em Meus destinos com sucesso!',
      showConfirmButton: false,
      timer: 1300});
  } */
}
