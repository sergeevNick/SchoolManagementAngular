import { GradeService } from './grade.service';
import { DataLoaderService } from '../data-loader/data-loader.service';
import Mock = jest.Mock;


describe('GradeService', () => {
    let service: GradeService;
    const MockDataLoaderService = jest.fn<DataLoaderService>(() => ({
        get: jest.fn()
    }));
    const dataLoaderService = new MockDataLoaderService();

    beforeEach(() => {
        service = new GradeService(dataLoaderService);
    });

    it('should create an instance of GradeService', () => {
        expect(service).toBeDefined();
    });

    describe('#getGrades', () => {
        it('should send correct parameters to DataLoader method \'get\'', async () => {
            await service.getGrades();
            expect(dataLoaderService.get).toHaveBeenCalledTimes(1);
            expect((dataLoaderService.get as Mock).mock.calls[0])
                .toEqual(['/grades/grades.json']);
        });
    });
});
