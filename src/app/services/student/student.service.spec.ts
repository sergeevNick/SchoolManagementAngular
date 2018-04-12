import { async, TestBed } from '@angular/core/testing';
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

    it('#getStudentsByGradeId should return students from grade id', async () => {
        const service = TestBed.get(StudentService);
        service.getStudentsByGradeId(1).then(res => {
            console.log('students', res);
            expect(res).toBe('../data/grades.1.students.json');
        });
    });

    it('#getStudents should return 404 Not Found when there is no url', () => {
        const service = TestBed.get(StudentService);
        service.getStudentsByGradeId(100).catch((error: any) => {
            expect(error.message).toContain('404 Not Found');
        });
    });
});
