import { ScheduleService } from './schedule.service';

class DataLoaderService {
    get(apiUrl: string) {
    }
}

describe('ScheduleService', () => {
    let service: ScheduleService;
    let dataLoaderServiceStub: DataLoaderService;
    beforeEach(() => {
        dataLoaderServiceStub = new DataLoaderService();
        service = new ScheduleService(dataLoaderServiceStub);
    });

    test('should create an instance of ScheduleService', () => {
        expect(service).toBeDefined();
    });

    describe('#getScheduleByGradeId', () => {
        test('should call DataLoaderService get method', () => {
            const getSpy = jest.spyOn(dataLoaderServiceStub, 'get');
            service.getScheduleByGradeId(1);
            expect(getSpy).toHaveBeenCalled();
        });
    });
});
