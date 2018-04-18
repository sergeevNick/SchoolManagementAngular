import { GradeService } from './grade.service';

class DataLoaderService {
    get(apiUrl: string) {
    }
}

describe('GradeService', () => {
    let service: GradeService;
    let dataLoaderServiceStub: DataLoaderService;

    beforeEach(() => {
        dataLoaderServiceStub = new DataLoaderService();
        service = new GradeService(dataLoaderServiceStub);
    });

    test('should create an instance of GradeService', () => {
        expect(service).toBeDefined();
    });

    describe('#getGrades', () => {
        test('should call DataLoaderService get method', () => {
            const getSpy = jest.spyOn(dataLoaderServiceStub, 'get');
            service.getGrades();
            expect(getSpy).toHaveBeenCalled();
        });
    });
});
