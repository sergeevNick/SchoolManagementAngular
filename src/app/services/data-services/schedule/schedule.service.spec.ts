import { ScheduleService } from './schedule.service';
import { DataLoaderService } from '../data-loader/data-loader.service';
import Mock = jest.Mock;


describe('ScheduleService', () => {
    let service: ScheduleService;
    const MockDataLoaderService = jest.fn<DataLoaderService>(() => ({
        get: jest.fn()
    }));
    const dataLoaderService = new MockDataLoaderService();

    beforeEach(() => {
        service = new ScheduleService(dataLoaderService);
    });

    it('should create an instance of ScheduleService', () => {
        expect(service).toBeDefined();
    });

    describe('#getScheduleByGradeId', () => {
        it('should send correct parameters to DataLoader method \'get\'', async() => {
            await service.getScheduleByGradeId(1);
            expect(dataLoaderService.get).toHaveBeenCalledTimes(1);
            expect((dataLoaderService.get as Mock).mock.calls[0])
                .toEqual(['/schedule/grades.:gradeId.schedule.json', {'gradeId': 1}]);
        });
    });
});
