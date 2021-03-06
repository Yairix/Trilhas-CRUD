import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { SobrenosComponent } from './../sobrenos/sobrenos.component';
import { FaleconoscoComponent } from './../faleconosco/faleconosco.component';
import { TasksComponent } from './../components/tasks/tasks.component';
import { RecommendedComponent } from '../components/recommended/recommended.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'Recommended', component: RecommendedComponent },
  { path: 'sobrenos', component: SobrenosComponent },
  { path: 'faleconosco', component: FaleconoscoComponent }
  //{ path: '', redirectTo: '/home', pathMatch: 'full' }
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