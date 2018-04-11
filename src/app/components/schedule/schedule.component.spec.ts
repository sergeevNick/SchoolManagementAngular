import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleComponent } from './schedule.component';
import { FormsModule } from '@angular/forms';
import { MarksTableComponent } from '../marks-table/marks-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GradeService } from '../../services/grade/grade.service';
import { ScheduleService } from '../../services/schedule/schedule.service';
import { DataLoaderService } from '../../services/data-loader/data-loader.service';

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
                GradeService,
                ScheduleService,
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
