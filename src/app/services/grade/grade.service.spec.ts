import { TestBed, inject } from '@angular/core/testing';
import { GradeService } from './grade.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataLoaderService } from '../data-loader/data-loader.service';

describe('GradeService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                HttpClientModule,
                CommonModule,
                FormsModule
            ],
            providers: [
                GradeService,
                DataLoaderService
            ]
        });
    });

    it('#getGrades should return all grades', () => {
        const service = TestBed.get(GradeService);
        service.getGrades().then(res => {
            console.log(res);
            expect(res).toBe('../data/grades/grades.json');
        });
    });
});
