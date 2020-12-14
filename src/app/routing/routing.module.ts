import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { TasksComponent } from '../components/tasks/tasks.component';
import { RecommendedComponent } from '../components/recommended/recommended.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'todas', component: TasksComponent  },
  { path: 'recomendadas', component: RecommendedComponent  },


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
