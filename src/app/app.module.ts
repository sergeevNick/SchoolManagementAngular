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
import { GradeService } from './services/data-services/grade/grade.service';
import { StudentService } from './services/data-services/student/student.service';
import { SubjectService } from './services/data-services/subject/subject.service';
import { ScheduleService } from './services/data-services/schedule/schedule.service';
import { MarkService } from './services/data-services/mark/mark.service';
import { DataLoaderService } from './services/data-services/data-loader/data-loader.service';
import { MarkEditComponent } from './components/mark-edit/mark-edit.component';
import { JournalService } from './services/app-services/journal.service';


@NgModule({
    declarations: [
        MarkEditComponent,
        MarksTableComponent,
        ScheduleComponent,
        StudentSelectorComponent,
        SubjectSelectorComponent,
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        DataLoaderService,
        GradeService,
        MarkService,
        ScheduleService,
        StudentService,
        SubjectService,
        JournalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
