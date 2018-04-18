import { SubjectService } from './subject.service';

class DataLoaderService {
    get(apiUrl: string) {}
}

describe('SubjectService', () => {
    let service: SubjectService;
    let dataLoaderServiceStub: DataLoaderService;

    beforeEach(() => {
        dataLoaderServiceStub = new DataLoaderService();
        service = new SubjectService(dataLoaderServiceStub);
    });

    test('should create an instance of SubjectService', () => {
        expect(service).toBeDefined();
    });

    describe('#getSubjectsByGradeId', () => {
        test('should call DataLoaderService get method', () => {
            const getSpy = jest.spyOn(dataLoaderServiceStub, 'get');
            service.getSubjectsByGradeId(1);
            expect(getSpy).toHaveBeenCalled();
        });
    });
});
