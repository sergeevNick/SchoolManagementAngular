import { TestBed } from '@angular/core/testing';
import { ScheduleService } from './schedule.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DataLoaderService } from '../data-loader/data-loader.service';

describe('ScheduleService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                HttpClientModule,
                CommonModule,
                FormsModule
            ],
            providers: [
                DataLoaderService,
                ScheduleService]
        });
    });

    it('#getSchedule test case', () => {
        const service = TestBed.get(ScheduleService);
        for (let i = 1; i < 5; i++) {
            service.getSchedule(1).then(res => {
                expect(res).toBe('../../assets/data/grades.1.schedule.json');
            });
        }
    });

    it('#getSchedule schould return 404 Not Found when there is no url', () => {
        const service = TestBed.get(ScheduleService);
        service.getSchedule(100).catch((error: any) => {
            expect(error.message).toContain('404 Not Found');
        });
    });
});
