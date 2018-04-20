import { environment } from '../../environments/environment';
import { HttpUtilities } from './HttpUtilities';

describe('HttpUtilities', () => {
    beforeEach(() => {
    });

    describe('#makeURL', () => {
        test('should return url', () => {
            expect(HttpUtilities.makeUrl(environment.urls.school.students.getStudentsByGradeId, {gradeId: 1}))
                .toEqual('http://localhost:4200/assets/data/students/grades.1.students.json');
            expect(HttpUtilities.makeUrl(environment.urls.school.grades.getAll))
                .toEqual('http://localhost:4200/assets/data/grades/grades.json');
            expect(HttpUtilities.makeUrl(environment.urls.school.marks.getMarksByStudentIdAndSubjectId, {studentId: 1, subjectId: 1}))
                .toEqual('http://localhost:4200/assets/data/marks/marks.students.1.subjects.1.json');
        });
    });

    describe('#makeBody', () => {
        test('should return a body for request', () => {
            expect(HttpUtilities.makeBody({value: 5}))
                .toEqual('{"value":5}');
            expect(HttpUtilities.makeBody({value: 5, date: '2018-03-03'}))
                .toEqual('{"value":5,"date":"2018-03-03"}');
            expect(HttpUtilities.makeBody({}))
                .toEqual('{}');
        });
    });
});
