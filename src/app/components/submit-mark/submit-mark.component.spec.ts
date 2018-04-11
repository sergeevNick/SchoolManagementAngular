import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitMarkComponent } from './submit-mark.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MarkService } from '../../services/mark/mark.service';
import { DataLoaderService } from '../../services/data-loader/data-loader.service';
import { GradeService } from '../../services/grade/grade.service';
import { SubjectService } from '../../services/subject/subject.service';
import { StudentService } from '../../services/student/student.service';

describe('SubmitMarkComponent', () => {
    let component: SubmitMarkComponent;
    let fixture: ComponentFixture<SubmitMarkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SubmitMarkComponent],
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
        fixture = TestBed.createComponent(SubmitMarkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
