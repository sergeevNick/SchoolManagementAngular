import { TestBed, inject } from '@angular/core/testing';
import { SubjectService } from './subject.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DataLoaderService } from '../data-loader/data-loader.service';

describe('SubjectService', () => {
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
                SubjectService]
        });
    });

    it('#getSubjects should return all subjects from grade', () => {
        const service = TestBed.get(SubjectService);
        for (let i = 1; i < 5; i++) {
            service.getSubjectsByGradeId(1).then(res => {
                expect(res).toBe('../../assets/data/grades.1.subjects.json');
            });
        }
    });

    it('#getSubjects schould return 404 Not Found when there is no url', () => {
        const service = TestBed.get(SubjectService);
        service.getSubjectsByGradeId(100).catch((error: any) => {
            expect(error.message).toContain('404 Not Found');
        });
    });
});
