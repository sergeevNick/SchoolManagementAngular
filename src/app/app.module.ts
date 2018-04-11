import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarksTableComponent } from './components/marks-table/marks-table.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { Routes, RouterModule } from '@angular/router';
import { SubmitMarkComponent } from './components/submit-mark/submit-mark.component';
import { GradeService } from './services/grade/grade.service';
import { StudentService } from './services/student/student.service';
import { SubjectService } from './services/subject/subject.service';
import { ScheduleService } from './services/schedule/schedule.service';
import { MarkService } from './services/mark/mark.service';
import { DataLoaderService } from './services/data-loader/data-loader.service';

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
    providers: [
        GradeService,
        StudentService,
        SubjectService,
        ScheduleService,
        MarkService,
        DataLoaderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
