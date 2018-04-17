import { TestBed } from '@angular/core/testing';
import { GradeService } from './grade.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataLoaderService } from '../data-loader/data-loader.service';
import { isUndefined } from 'util';

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
        /*console.log(service.getGrades());
        let out;
        service.getGrades().then(res =>
            out = res);
        console.log('out', out);
        expect(out).toBe(22);*/
        service.getGrades().then(res => {
            console.log(res);
            expect(res).toBe('http://localhost:4200/assets/data/grades/grades.json');
            expect(false).toEqual(true);
        });
    });
});
