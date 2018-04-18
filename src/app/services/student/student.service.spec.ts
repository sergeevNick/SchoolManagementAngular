import { StudentService } from './student.service';

class DataLoaderService {
    get(apiUrl: string) {
    }
}

describe('StudentService', () => {
    let service: StudentService;
    let dataLoaderServiceStub: DataLoaderService;
    beforeEach(() => {
        dataLoaderServiceStub = new DataLoaderService();
        service = new StudentService(dataLoaderServiceStub);
    });

    test('should create an instance of StudentService', () => {
        expect(service).toBeDefined();
    });

    describe('#getStudentsByGradeId', () => {
        test('should call DataLoaderService get method', () => {
            const getSpy = jest.spyOn(dataLoaderServiceStub, 'get');
            service.getStudentsByGradeId(1);
            expect(getSpy).toHaveBeenCalled();
        });
    });
});
