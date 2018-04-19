import { HttpHeaders } from '@angular/common/http';
import { DataLoaderService } from './data-loader.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

class HttpClient {
    get(): Observable<any> {
        return new Observable();
    }
}

describe('DataLoaderService', () => {
    let service: DataLoaderService;
    let httpClientStub: HttpClient;
    let httpOptions: { headers: HttpHeaders };

    beforeEach(() => {
        httpClientStub = new HttpClient();
        service = new DataLoaderService(httpClientStub);
        httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    });

    test('should create an instance of DataLoaderService', () => {
        expect(service).toBeDefined();
    });

    describe('#makeURL', () => {
        test('should return url', () => {
            expect(service.makeUrl(environment.urls.school.students.getStudentsByGradeId, {gradeId: 1}))
                .toEqual('http://localhost:4200/assets/data/students/grades.1.students.json');
            expect(service.makeUrl(environment.urls.school.grades.getAll))
                .toEqual('http://localhost:4200/assets/data/grades/grades.json');
            expect(service.makeUrl(environment.urls.school.marks.getMarksByStudentIdAndSubjectId, {studentId: 1, subjectId: 1}))
                .toEqual('http://localhost:4200/assets/data/marks/marks.students.1.subjects.1.json');
        });
    });

    describe('#makeBody', () => {
        test('should return a body for request', () => {
            expect(service.makeBody({value: 5}))
                .toEqual('{"value":5}');
            expect(service.makeBody({value: 5, date: '2018-03-03'}))
                .toEqual('{"value":5,"date":"2018-03-03"}');
            expect(service.makeBody({}))
                .toEqual('{}');
        });
    });

    describe('#get', () => {
        test('should call methods from HttpClient', () => {
            // testing only get method from HttpClient due to dev mode
            const getSpy = jest.spyOn(httpClientStub, 'get');
            service.get(environment.urls.school.grades.getAll);
            service.post(environment.urls.school.marks.addMarkByStudentIdAndSubjectId, {value: 4});
            service.delete(environment.urls.school.marks.deleteMarkByMarkId, {markId: 3});
            expect(getSpy).toHaveBeenCalledTimes(3);
        });
    });
});
