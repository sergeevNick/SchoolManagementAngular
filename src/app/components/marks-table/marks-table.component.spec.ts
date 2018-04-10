import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksTableComponent } from './marks-table.component';
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
import { Input } from '@angular/core';

describe('MarksTableComponent', () => {
    let component: MarksTableComponent;
    let fixture: ComponentFixture<MarksTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MarksTableComponent],
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
        fixture = TestBed.createComponent(MarksTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
