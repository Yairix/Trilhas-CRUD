import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewTaskComponent } from './components/newTask/newTask.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ListTasksComponent } from './components/listTasks/listTasks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliceBarComponent } from './sliceBar/sliceBar.component';
import { routing } from './app.routing';

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
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
