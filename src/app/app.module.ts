import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './components/student-list/student-list.component';
import { SchoolService } from './services/school.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarksTableComponent } from './components/marks-table/marks-table.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { Routes, RouterModule } from '@angular/router';
import { SubmitMarkComponent } from './components/submit-mark/submit-mark.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    MarksTableComponent,
    ScheduleComponent,
    SubmitMarkComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
