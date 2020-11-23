import { Injectable } from '@angular/core';
import { Task } from '../models/Taks';

const TaskList = [
  {
  "id": 1,
  "title": "Pedra Bonita",
  "description": "A Pedra Bonita está situada no Parque Nacional da Tijuca, entre a praia de São Conrado e a Barra da Tijuca.",
  "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ipanema_PDS.jpg/1024px-Ipanema_PDS.jpg",
  "tempo": "30-50 min",
  "distancia": "1.15",
  "altura": "693",
  "dificuldade": "Dificil",
  },
  {
  "id": 2,
  "title": "Pedra da Gávea",
  "description": "Temida por muitos e amada por outros. Há quem nunca tenha chegado ao topo por medo de enfrentar a “carrasqueira”.",
  "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ipanema_PDS.jpg/1024px-Ipanema_PDS.jpg",
  "tempo": "3:30 - 4:00 horas",
  "distancia": "3",
  "altura": "842",
  "dificuldade": "Moderada", 
  },
  {
  "id": 3,
  "title": "Morro da Urca",
  "description": "A trilha para o topo do Morro alterna subidas íngremes e trechos mais planos.",
  "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ipanema_PDS.jpg/1024px-Ipanema_PDS.jpg",
  "tempo": "35-45 min",
  "distancia": "1.5",
  "altura": "220",
  "dificuldade": "Leve",
  }
  
]

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(){
    return TaskList;
  }

  getOneTask(_id) {
    return TaskList.find(task => task.id === _id)
  }

  addTask(task: Task){
    TaskList.push(task);
  }

  editTask(newTaskEdit){
    const index = TaskList.findIndex(task => task.id === newTaskEdit.id)

    TaskList[index] = newTaskEdit;
  }

  deleteTask(_id){
    TaskList.splice(_id, 1);
  }
}
