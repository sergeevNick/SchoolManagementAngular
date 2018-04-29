import { SubjectService } from './subject.service';
import Mock = jest.Mock;


class DataLoaderService {
    get() {
    }
}

describe('SubjectService', () => {
    let service: SubjectService;
    const MockDataLoaderService = jest.fn<DataLoaderService>(() => ({
        get: jest.fn()
    }));
    const dataLoaderService = new MockDataLoaderService();

    beforeEach(() => {
        service = new SubjectService(dataLoaderService);
    });

    it('should create an instance of SubjectService', () => {
        expect(service).toBeDefined();
    });

    describe('#getSubjectsByGradeId', () => {
        it('should send correct parameters to DataLoader method \'get\'', async() => {
            await service.getSubjectsByGradeId(1);
            expect(dataLoaderService.get).toHaveBeenCalledTimes(1);
            expect((dataLoaderService.get as Mock).mock.calls[0])
                .toEqual(['/subjects/grades.:gradeId.subjects.json', {'gradeId': 1}]);
        });
    });
});
