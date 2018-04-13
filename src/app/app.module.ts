import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentSelectorComponent } from './components/student-selector/student-selector.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarksTableComponent } from './components/marks-table/marks-table.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SubjectSelectorComponent } from './components/subject-selector/subject-selector.component';
import { GradeService } from './services/grade/grade.service';
import { StudentService } from './services/student/student.service';
import { SubjectService } from './services/subject/subject.service';
import { ScheduleService } from './services/schedule/schedule.service';
import { MarkService } from './services/mark/mark.service';
import { DataLoaderService } from './services/data-loader/data-loader.service';
import { MarkEditComponent } from './components/mark-edit/mark-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        ScheduleComponent,
        StudentSelectorComponent,
        SubjectSelectorComponent,
        MarksTableComponent,
        MarkEditComponent
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
        DataLoaderService,
        ScheduleService,
        GradeService,
        StudentService,
        SubjectService,
        MarkService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
