import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSelectorComponent } from './subject-selector.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MarkService } from '../../services/mark/mark.service';
import { DataLoaderService } from '../../services/data-loader/data-loader.service';
import { GradeService } from '../../services/grade/grade.service';
import { SubjectService } from '../../services/subject/subject.service';
import { StudentService } from '../../services/student/student.service';

describe('SubjectSelectorComponent', () => {
    let component: SubjectSelectorComponent;
    let fixture: ComponentFixture<SubjectSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SubjectSelectorComponent],
            imports: [
                BrowserModule,
                HttpClientModule,
                CommonModule,
                FormsModule
            ],
            providers: [
                SubjectService,
                StudentService,
                GradeService,
                MarkService,
                DataLoaderService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SubjectSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
