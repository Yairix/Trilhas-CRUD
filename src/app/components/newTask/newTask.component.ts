import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newTask',
  templateUrl: './newTask.component.html',
  styleUrls: ['./newTask.component.css']
})
export class NewTaskComponent implements OnInit {

  //myId = 7;
  Trilhas
  newTask = {
    //id: this.myId,
    title: "",
    description: "",
    imagem: "",
    tempo: "",
    distancia: "",
    altura: "",
    dificuldade: "",
  }
  constructor(private listServ: TaskService) { }

  ngOnInit(): void {
  }
 
  addTask() {
      /* console.log("we will send the data", this.newTask);
      this.listServ.addTask(this.newTask) */
      // console.log("we will send the data", this.newTask);
      if(this.newTask.imagem == ""){
        this.newTask.imagem = "https://i.imgur.com/1mHU1fp.jpg";
      }
      this.listServ.addTask(this.newTask).subscribe(Trilhas => {
        this.Trilhas = Trilhas;
        console.log(Trilhas)
    })
    //this.myId ++;
    
    location.reload();
    //console.log(this.myId);
    this.newTask = {
      //id: this.myId,
      title: "",
      description: "",
      imagem: "",
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
