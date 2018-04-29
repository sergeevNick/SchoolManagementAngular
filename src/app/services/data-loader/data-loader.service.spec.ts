import { DataLoaderService } from './data-loader.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Mock = jest.Mock;


describe('DataLoaderService', () => {
    let service: DataLoaderService;
    // TODO: Error: Cannot read property 'toPromise' of undefined. Make return type Observable or may be it should be fixed in other way.
    const MockHttpClient = jest.fn<HttpClient>(() => ({
        get: jest.fn()
    }));
    const httpClient = new MockHttpClient();

    beforeEach(() => {
        service = new DataLoaderService(httpClient);
    });

    it('should create an instance of DataLoaderService', () => {
        expect(service).toBeDefined();
    });

    describe('#makeURL', () => {
        it('should return url', () => {
            expect(DataLoaderService.makeUrl(environment.urls.school.students.getStudentsByGradeId, {gradeId: 1}))
                .toEqual('http://localhost:4200/assets/data/students/grades.1.students.json');
            expect(DataLoaderService.makeUrl(environment.urls.school.grades.getAll))
                .toEqual('http://localhost:4200/assets/data/grades/grades.json');
            expect(DataLoaderService.makeUrl(environment.urls.school.marks.getMarksByStudentIdAndSubjectId, {studentId: 1, subjectId: 1}))
                .toEqual('http://localhost:4200/assets/data/marks/marks.students.1.subjects.1.json');
        });
    });

    describe('#makeBody', () => {
        it('should return a body for request', () => {
            expect(DataLoaderService.makeBody({value: 5}))
                .toEqual('{"value":5}');
            expect(DataLoaderService.makeBody({value: 5, date: '2018-03-03'}))
                .toEqual('{"value":5,"date":"2018-03-03"}');
            expect(DataLoaderService.makeBody({}))
                .toEqual('{}');
        });
    });

    describe('#get', () => {
        it('should call \'get\' method from HttpClient', async () => {
            // testing only get method from HttpClient due to dev mode
            await service.get(environment.urls.school.grades.getAll);
            await service.post(environment.urls.school.marks.addMarkByStudentIdAndSubjectId, {value: 4});
            await service.delete(environment.urls.school.marks.deleteMarkByMarkId, {markId: 3});
            expect(httpClient.get).toHaveBeenCalledTimes(3);
            expect((httpClient.get as Mock).mock.calls[0]).toEqual(['http://localhost:4200/assets/data/grades/grades.json']);
            expect((httpClient.get as Mock).mock.calls[1]).toEqual(['http://localhost:4200/assets/data/marks/marks.added.json']);
            expect((httpClient.get as Mock).mock.calls[2]).toEqual(['http://localhost:4200/assets/data/marks/marks.3.json']);
        });
    });
});
