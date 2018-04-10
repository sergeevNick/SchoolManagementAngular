import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleComponent } from './schedule.component';
import { FormsModule } from '@angular/forms';
import { DataLoaderService } from '../../services/data-loader.service';
import { MarkService } from '../../services/mark.service';
import { SubjectService } from '../../services/subject.service';
import { StudentService } from '../../services/student.service';
import { GradeService } from '../../services/grade.service';
import { MarksTableComponent } from '../marks-table/marks-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ScheduleService } from '../../services/schedule.service';

describe('ScheduleComponent', () => {
    let component: ScheduleComponent;
    let fixture: ComponentFixture<ScheduleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleComponent],
            imports: [
                BrowserModule,
                HttpClientModule,
                CommonModule,
                FormsModule
            ],
            providers: [
                ScheduleService,
                GradeService,
                StudentService,
                SubjectService,
                MarkService,
                DataLoaderService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
