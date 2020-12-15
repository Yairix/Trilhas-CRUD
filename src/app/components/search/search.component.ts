import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() sendPosition = new EventEmitter;
  
  
  _id
  Trilhas

  findTask = {
    id: "_id",
    title: "",
    description: "",
    imagen: "",
    tempo: "",
    distancia: "",
    altura: "",
    dificuldade: ""
  }

  constructor(private listServ: TaskService, private activatedRoute: ActivatedRoute) {
    this.listServ.getOneTask(this._id).subscribe(Trilhas => {
      this.Trilhas = Trilhas;
      console.log(Trilhas);
    });
   }

  ngOnInit(): void {
    let _id = this.activatedRoute.snapshot.params._id;
    console.log(_id)

    this.activatedRoute.paramMap.subscribe(params => {
      _id = params.get('_id');
    }

    )}


  

  

}
