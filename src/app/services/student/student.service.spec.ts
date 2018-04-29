import { StudentService } from './student.service';
import { DataLoaderService } from '../data-loader/data-loader.service';
import Mock = jest.Mock;


describe('StudentService', () => {
    let service: StudentService;
    const MockDataLoaderService = jest.fn<DataLoaderService>(() => ({
        get: jest.fn()
    }));
    const dataLoaderService = new MockDataLoaderService();

    beforeEach(() => {
        service = new StudentService(dataLoaderService);
    });

    it('should create an instance of StudentService', () => {
        expect(service).toBeDefined();
    });

    describe('#getStudentsByGradeId', () => {
        it('should send correct parameters to DataLoader method \'get\'', async () => {
            await service.getStudentsByGradeId(1);
            expect(dataLoaderService.get).toHaveBeenCalledTimes(1);
            expect((dataLoaderService.get as Mock).mock.calls[0])
                .toEqual(['/students/grades.:gradeId.students.json', {'gradeId': 1}]);
        });
    });
});
