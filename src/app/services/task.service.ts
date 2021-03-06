import { Injectable } from '@angular/core';
import { Task } from '../models/Taks';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

const TaskList = [
  {
  "id": 1,
  "title": "Parque Laje até o Corcovado",
  "description": "A trilha do Parque Lage oferece o privilégio de ligar dois pontos turísticos imperdíveis do Rio de Janeiro: o Parque Lage e o mundialmente conhecido Corcovado.",
  "imagem": "https://i0.wp.com/blog.paineirascorcovado.com.br/wp-content/uploads/2020/08/Paineiras_Drone_C-007.jpg?resize=640%2C427&ssl=1",
  "tempo": "2h 20 min / 2h 40 min",
  "distancia": "2.24",
  "altura": "704",
  "dificuldade": "Leve",
  },
  {
  "id": 2,
  "title": "Pedra da Gávea",
  "description": "Temida por muitos e amada por outros. Há quem nunca tenha chegado ao topo por medo de enfrentar a “carrasqueira”.",
  "imagem": "https://cdipg.s3.amazonaws.com/rio_de_janeiro/events/photos/000/000/049/show/Cav_01.jpg?1516018415",
  "tempo": "3:30 - 4:00 horas",
  "distancia": "3",
  "altura": "842",
  "dificuldade": "Moderada", 
  },
  {
  "id": 3,
  "title": "Morro da Urca",
  "description": "A trilha para o topo do Morro alterna subidas íngremes e trechos mais planos.",
  "imagem": "https://freewalkertours.com/wp-content/uploads/sendero-del-morro-de-urca.jpg",
  "tempo": "35-45 min",
  "distancia": "1.5",
  "altura": "220",
  "dificuldade": "Leve",
  },
  {
  "id": 4,
  "title": "Morro Dois Irmãos",
  "description": "Um dos mais belos cartões postais da Zona Sul do Rio de Janeiro é o Morro Dois Irmãos, que pode ser visto bem mais de perto por meio de uma trilha de nível moderado.",
  "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ipanema_PDS.jpg/1024px-Ipanema_PDS.jpg",
  "tempo": "45min/ 1h",
  "distancia": "1.5",
  "altura": "533",
  "dificuldade": "Moderada",
  },
  {
  "id": 5,
  "title": "Pedra Bonita",
  "description": "A Pedra Bonita está situada no Parque Nacional da Tijuca, entre a praia de São Conrado e a Barra da Tijuca.",
  "imagem": "https://trilhaape.com.br/images/calendar/pedra_bonita%20(1)%20(Copy)_2.jpg",
  "tempo": "30-50 min",
  "distancia": "1.15",
  "altura": "693",
  "dificuldade": "Dificil",
  },
  {
  "id": 6,
  "title": "Pedra do Telégrafo",
  "description": "A Pedra do Telégrafo fica em Barra de Guaratiba, Zona Oeste do Rio de Janeiro. A região fica a cerca de 50km de distância do Centro.",
  "imagem": "https://www.nattrip.com.br/wp-content/uploads/2017/02/Pedra-do-Tel%C3%A9grafo-11.jpg",
  "tempo": "1h / 1h 30 min",
  "distancia": "2.3",
  "altura": "345",
  "dificuldade": "Moderada",
  }
  
]

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private http: HttpClient ) {  }

  getTask(){
    // return TaskList;
    return this.http.get('http://localhost:3000/tasks')
  }
  getTaskRecomend(){
    return TaskList;
    
  }

  getOneTask(_id) {
    // return TaskList.find(task => task.id === _id)
    return this.http.get(`http://localhost:3000/tasks/`+_id)
  }

  addTask(body){
    // TaskList.push(task);
    return this.http.post('http://localhost:3000/tasks/', body)
  }

  editTask(_id, body){
    // const index = TaskList.findIndex(task => task.id === newTaskEdit.id)
    // TaskList[index] = newTaskEdit;
    return this.http.put(`http://localhost:3000/tasks/`+_id, body)
  }

  deleteTask(idDele){
    // TaskList.splice(_id, 1);
    //return this.http.delete(`http://localhost:3000/tasks/`+_id)
    let url = "http://localhost:3000/tasks/"+idDele
    console.log(url)
    return this.http.delete(url);
  
  }
}
