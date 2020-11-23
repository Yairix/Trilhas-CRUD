import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newTask',
  templateUrl: './newTask.component.html',
  styleUrls: ['./newTask.component.css']
})
export class NewTaskComponent implements OnInit {

  myId = 4;

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
  }

 
  addTask() {
    console.log("we will send the data", this.newTask);
    this.listServ.addTask(this.newTask)
    this.myId ++;
    console.log(this.myId);
    this.newTask = {
      id: this.myId,
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
      title: 'Destino criado com sucesso!',
      showConfirmButton: false,
      timer: 1300});
  }

}
