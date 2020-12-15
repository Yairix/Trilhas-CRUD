import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listTasks',
  templateUrl: './listTasks.component.html',
  styleUrls: ['./listTasks.component.css']
})
export class ListTasksComponent implements OnInit {

  @Output() sendPosition = new EventEmitter;

  // myTasks: Task;
  Trilhas
  constructor(private listServ: TaskService) { 
    listServ.getTask().subscribe(Trilhas => {
      this.Trilhas = Trilhas;
      console.log(Trilhas);
    });
  }

  ngOnInit(): void {
    // this.myTasks = this.listServ.getTask()
    // console.log("My tasks: ", this.myTasks)
  }

  deleteTask(_id){
  
    Swal.fire({
      title: 'Deseja apagar este ítem?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.listServ.deleteTask(_id)
        Swal.fire({
          icon: 'success',
          title: 'Deletado com sucesso!',
          showConfirmButton: false,
          timer: 1300});
       
      }
    })
    
  }

  getPositions(_id) {
    this.sendPosition.emit(_id);
  }

  cancelEdit2() {

  }

}
