import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';

import { NewTaskComponent } from './components/newTask/newTask.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ListTasksComponent } from './components/listTasks/listTasks.component';

import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './home/home.component';
import { RecommendedComponent } from './components/recommended/recommended.component';


@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    TasksComponent,
    ListTasksComponent,
    SidenavComponent,
    HeaderComponent,
    LayoutComponent,
    HomeComponent,
    RecommendedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
