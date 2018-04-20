import { DataLoaderService } from './data-loader.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpUtilities } from '../../utilities/HttpUtilities';

class HttpClient {
    get(): Observable<any> {
        return new Observable();
    }
}

describe('DataLoaderService', () => {
    let service: DataLoaderService;
    let httpClientStub: HttpClient;

    beforeEach(() => {
        httpClientStub = new HttpClient();
        service = new DataLoaderService(httpClientStub);
    });

    test('should create an instance of DataLoaderService', () => {
        expect(service).toBeDefined();
    });

    describe('#get', () => {
        test('should call \'get\' method from HttpClient', () => {
            // testing only get method from HttpClient due to dev mode
            const getSpy = jest.spyOn(httpClientStub, 'get');
            service.get(environment.urls.school.grades.getAll);
            service.post(environment.urls.school.marks.addMarkByStudentIdAndSubjectId, {value: 4});
            service.delete(environment.urls.school.marks.deleteMarkByMarkId, {markId: 3});
            expect(getSpy).toHaveBeenCalledTimes(3);
        });

        test('should call \'makeUrl\' method from HttpUtilities', () => {
            // testing only get method from HttpClient due to dev mode
            const makeUrlSpy = jest.spyOn(HttpUtilities, 'makeUrl');
            service.get(environment.urls.school.grades.getAll);
            service.post(environment.urls.school.marks.addMarkByStudentIdAndSubjectId, {value: 4});
            service.delete(environment.urls.school.marks.deleteMarkByMarkId, {markId: 3});
            expect(makeUrlSpy).toHaveBeenCalledTimes(3);
        });
    });
});
