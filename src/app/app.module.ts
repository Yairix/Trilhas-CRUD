import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliceBarComponent } from './slice-bar/slice-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    TasksComponent,
    ListTasksComponent,
    NavbarComponent,
    SliceBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
