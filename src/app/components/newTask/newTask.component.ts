import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newTask',
  templateUrl: './newTask.component.html',
  styleUrls: ['./newTask.component.css']
})
export class NewTaskComponent implements OnInit {

  myId = 7;

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

  addImgagen() {
    if(this.newTask.imagen == ""){
      this.newTask.imagen = "https://i.imgur.com/bekXpjJ.jpg";
    }
  }
 
  addTask() {
    console.log("we will send the data", this.newTask);
    this.listServ.addTask(this.newTask)
    this.myId ++;
    if(this.newTask.imagen == ""){
      this.newTask.imagen = "https://i.imgur.com/bekXpjJ.jpg";
    }
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
