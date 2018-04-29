import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { StudentSelectorComponent } from './student-selector.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student/student.service';
import { DataLoaderService } from '../../services/data-loader/data-loader.service';
import { GradeService } from '../../services/grade/grade.service';
import { SubjectService } from '../../services/subject/subject.service';

describe('StudentSelectorComponent', () => {
    let component: StudentSelectorComponent;
    let fixture: ComponentFixture<StudentSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [StudentSelectorComponent],
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
        fixture = TestBed.createComponent(StudentSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create student-selector-component', () => {
        expect(component).toBeDefined();
    });
});
