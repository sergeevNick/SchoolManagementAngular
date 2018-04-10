import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListComponent } from './student-list.component';
import { FormsModule } from '@angular/forms';
import { DataLoaderService } from '../../services/data-loader.service';
import { MarkService } from '../../services/mark.service';
import { SubjectService } from '../../services/subject.service';
import { StudentService } from '../../services/student.service';
import { GradeService } from '../../services/grade.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ScheduleService } from '../../services/schedule.service';

describe('StudentListComponent', () => {
    let component: StudentListComponent;
    let fixture: ComponentFixture<StudentListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StudentListComponent],
            imports: [
                BrowserModule,
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
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StudentListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
