import { HttpHeaders } from '@angular/common/http';
import { DataLoaderService } from './data-loader.service';
import { environment } from '../../../environments/environment';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';

class HttpClient {
    get(apiURL: string) {
        return 'http://localhost:4200/assets/data' + apiURL;
    }

    post(apiURL: string, body: any, headers: { headers: HttpHeaders }) {
        return 'http://localhost:4200/assets/data' + apiURL;
    }

    delete(apiURL: string) {
        return 'http://localhost:4200/assets/data' + apiURL;
    }
}

class Observable {
    private apiURL: string;

    constructor(apiURL: string) {
        this.apiURL = apiURL;
    }

    toPromise() {
        return new Promise(resolve => {
            resolve(this.apiURL);
        });
    }
}

describe('DataLoaderService', () => {
    let service;
    let httpMock: HttpTestingController;
    let httpOptions: { headers: HttpHeaders };

    beforeEach(() => {
        /*TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DataLoaderService]
        });

        service = TestBed.get(DataLoaderService);
        httpMock = TestBed.get(HttpClientTestingModule);*/
        service = new DataLoaderService(new HttpClient());
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
        test('should return json', () => {
            service.get(environment.urls.school.grades).then(res => {
                expect(res).toBeNull();
            })

          //  const req = httpMock.expectOne('/grades');

            // Assert that the request is a GET.
          //  expect(req.request.method).toEqual('GET');

            // Respond with mock data, causing Observable to resolve.
            // Subscribe callback asserts that correct data was returned.

            // Finally, assert that there are no outstanding requests.
          //  httpMock.verify();
        });


    });
});
