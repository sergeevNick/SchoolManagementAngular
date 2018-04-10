import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitMarkComponent } from './submit-mark.component';
import { GradeService } from '../../services/grade.service';
import { MarkService } from '../../services/mark.service';
import { StudentService } from '../../services/student.service';
import { SubjectService } from '../../services/subject.service';
import { DataLoaderService } from '../../services/data-loader.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ScheduleService } from '../../services/schedule.service';

describe('SubmitMarkComponent', () => {
    let component: SubmitMarkComponent;
    let fixture: ComponentFixture<SubmitMarkComponent>;
    let studentService: StudentService;
    let gradeService: GradeService;
    let markService: MarkService;
    let subjectService: SubjectService;

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
                GradeService,
                StudentService,
                SubjectService,
                MarkService,
                ScheduleService,
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

    it('#getGrades test case', () => {
        gradeService = TestBed.get(GradeService);
        expect(gradeService.getGrades().then(res => {
            res.toBe('../../assets/data/grades.json');
        }));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
