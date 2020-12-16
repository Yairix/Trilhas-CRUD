import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { TasksComponent } from '../components/tasks/tasks.component';
import { ListTasksComponent } from '../components/listTasks/listTasks.component';
import { RecommendedComponent } from '../components/recommended/recommended.component';
import { SearchComponent } from '../components/search/search.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'todas', component: ListTasksComponent },
  { path: 'recomendadas', component: RecommendedComponent },
  { path: 'pesquisar', component: SearchComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  
  ]
})
export class RoutingModule { }
