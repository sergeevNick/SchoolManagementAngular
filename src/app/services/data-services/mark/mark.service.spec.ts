import { MarkService } from './mark.service';
import { DataLoaderService } from '../data-loader/data-loader.service';
import Mock = jest.Mock;


describe('MarkService', () => {
    let service: MarkService;
    const MockDataLoaderService = jest.fn<DataLoaderService>(() => ({
        get: jest.fn(),
        post: jest.fn(),
        delete: jest.fn()
    }));
    const dataLoaderService = new MockDataLoaderService();

    beforeEach(() => {
        service = new MarkService(dataLoaderService);
    });

    it('should create an instance of MarkService', () => {
        expect(service).toBeDefined();
    });

    describe('#getMarksByStudentIdAndSubjectId', () => {
        it('should send correct parameters to DataLoader method \'get\'', async() => {
            await service.getMarksByStudentIdAndSubjectId(1, 1);
            expect(dataLoaderService.get).toHaveBeenCalledTimes(1);
            expect((dataLoaderService.get as Mock).mock.calls[0])
                .toEqual(['/marks/marks.students.:studentId.subjects.:subjectId.json', {'studentId': 1, 'subjectId': 1}]);
        });
    });

    describe('#addMarkByStudentIdAndSubjectId', () => {
        it('should send correct parameters to DataLoader method \'post\'', async() => {
            await service.addMark(1, 1, 5);
            expect(dataLoaderService.post).toHaveBeenCalledTimes(1);
            expect((dataLoaderService.post as Mock).mock.calls[0])
                .toEqual(['/marks/marks.added.json', {'value': 5}, {'studentId': 1, 'subjectId': 1}]);
        });
    });

    describe('#deleteMarkByMarkId', () => {
        it('should send correct parameters to DataLoader method \'delete\'', async() => {
            await service.deleteMarkByMarkId(1);
            expect(dataLoaderService.delete).toHaveBeenCalledTimes(1);
            expect((dataLoaderService.delete as Mock).mock.calls[0])
                .toEqual(['/marks/marks.:markId.json', {'markId': 1}]);
        });
    });
});
