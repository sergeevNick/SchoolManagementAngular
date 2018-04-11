import { TestBed, inject } from '@angular/core/testing';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DataLoaderService } from '../data-loader/data-loader.service';

describe('StudentService', () => {
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
                StudentService]
        });
    });

    it('#getStudents test case', () => {
        const service = TestBed.get(StudentService);
        for (let i = 1; i < 5; i++) {
            service.getStudentsByGradeId(1).then(res => {
                expect(res).toBe('../../assets/data/grades.1.students.json');
            });
        }
    });

    it('#getStudents schould return 404 Not Found when there is no url', () => {
        const service = TestBed.get(StudentService);
        service.getStudentsByGradeId(100).catch((error: any) => {
            expect(error.message).toContain('404 Not Found');
        });
    });
});
