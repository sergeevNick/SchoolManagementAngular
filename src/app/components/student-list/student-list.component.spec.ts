import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { StudentListComponent } from './student-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student/student.service';
import { DataLoaderService } from '../../services/data-loader/data-loader.service';
import { GradeService } from '../../services/grade/grade.service';
import { SubjectService } from '../../services/subject/subject.service';

describe('StudentListComponent', () => {
    let component: StudentListComponent;
    let fixture: ComponentFixture<StudentListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [StudentListComponent],
            imports: [
                BrowserModule,
                HttpClientModule,
                CommonModule,
                FormsModule
            ],
            providers: [
                GradeService,
                SubjectService,
                DataLoaderService,
                StudentService
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
