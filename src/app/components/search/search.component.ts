import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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
  }

  getPositions(_id) {
  this.sendPosition.emit(_id);
  
  }

}
