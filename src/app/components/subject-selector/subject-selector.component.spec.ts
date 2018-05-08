import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSelectorComponent } from './subject-selector.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MarkService } from '../../services/data-services/mark/mark.service';
import { DataLoaderService } from '../../services/data-services/data-loader/data-loader.service';
import { GradeService } from '../../services/data-services/grade/grade.service';
import { SubjectService } from '../../services/data-services/subject/subject.service';
import { StudentService } from '../../services/data-services/student/student.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SubjectSelectorComponent', () => {
    let component: SubjectSelectorComponent;
    let fixture: ComponentFixture<SubjectSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SubjectSelectorComponent],
            imports: [HttpClientModule,
                FormsModule],
            providers: [
                GradeService,
                StudentService,
                SubjectService,
                DataLoaderService
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SubjectSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create subject-selector-component', () => {
        expect(component).toBeDefined();
    });
});
