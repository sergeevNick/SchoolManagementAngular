import { TestBed } from '@angular/core/testing';
import { MarkService } from './mark.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataLoaderService } from '../data-loader/data-loader.service';
import { GradeService } from '../grade/grade.service';
import { StudentService } from '../student/student.service';
import { SubjectService } from '../subject/subject.service';

describe('MarkService', () => {
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
                MarkService,
                GradeService,
                StudentService,
                SubjectService
            ]
        });
    });

    it('#getMarksByStudentIdAndSubjectId should return all marks by subject id from student', () => {
        const service = TestBed.get(MarkService);
        const gradeService = TestBed.get(GradeService);
        const studentService = TestBed.get(StudentService);
        const subjectService = TestBed.get(SubjectService);
        let gradeList;
        let subjectList;
        let studentList;
        gradeService.getGrades().then(grades => {
            gradeList = grades;
            console.log('grades 1:', gradeList);
            for (const grade of gradeList) {
                studentService.getStudentsByGradeId(grade.gradeId).then((students: any) => {
                    studentList = students;
                });
                subjectService.getSubjectsByGradeId(grade.gradeId).then((subjects: any) => {
                    subjectList = subjects;
                });

                for (const student of studentList) {
                    for (const subject of subjectList) {
                        service.getMarksByStudentIdAndSubjectId(student.studentId, subject.subjectId).then(res => {
                            expect(res).toBe('../marks/marks.students.' + student.studentId + '.subjects.' + subject.subjectId + '.json');
                        });
                    }
                }
            }
        });
        console.log('grades 2:', gradeList);
    });

    it('#addMark should return new mark with value 5', () => {
        const service = TestBed.get(MarkService);
        service.addMark(1, 1, 5).then((res: any) => {
            expect(res.value).toBe(5);
        });
    });

    it('#deleteMark schould return 404 Not Found when there is no url', () => {
        const service = TestBed.get(MarkService);
        service.deleteMarkByMarkId(100).catch((error: any) => {
            expect(error.message).toContain('404 Not Found');
        });
    });

    it('#addMark schould return 404 Not Found when there is no url', () => {
        const service = TestBed.get(MarkService);
        expect(service.addMark(2, 2, 5).catch((error: any) => {
            error.message.toContain('404 Not Found');
        }));
    });
});
