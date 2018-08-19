import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import 'flatpickr/dist/flatpickr.css';

import { AppComponent } from './app.component';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { FlatpickrModule } from 'angularx-flatpickr';

import { DemoComponent } from './calendar.component';
import { TimeComponent } from './time.component';

import {MomentModule} from 'angular2-moment/moment.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DemoComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    BrowserAnimationsModule,
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot()
  ],
  exports: [
    DemoComponent
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }