import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTasksComponent } from './components/listTasks/listTasks.component';
import { NewTaskComponent } from './components/newTask/newTask.component';


const APP_ROUTES: Routes = [
    { path: '', component: ListTasksComponent}, //coloquei os recomendados como a primeria pestanha ja que nao sei como vai ficar no final, qualquer coisa, somente mexer aqui.
    { path: 'novo', component: NewTaskComponent},

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);