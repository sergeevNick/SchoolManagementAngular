import { MarkService } from './mark.service';

class DataLoaderService {
    get(apiUrl: string) {
    }

    post(path: string, object: any) {
    }

    delete(apiUrl: string) {
    }
}

describe('MarkService', () => {
    let service: MarkService;
    let dataLoaderServiceStub: DataLoaderService;
    beforeEach(() => {
        dataLoaderServiceStub = new DataLoaderService();
        service = new MarkService(dataLoaderServiceStub);
    });

    test('should create an instance of MarkService', () => {
        expect(service).toBeDefined();
    });

    describe('#getMarksByStudentIdAndSubjectId', () => {
        test('should call DataLoaderService get method', () => {
            const getSpy = jest.spyOn(dataLoaderServiceStub, 'get');
            service.getMarksByStudentIdAndSubjectId(1, 1);
            expect(getSpy).toHaveBeenCalled();
        });
    });

    describe('#addMark', () => {
        test('should call DataLoaderService post method', () => {
            const postSpy = jest.spyOn(dataLoaderServiceStub, 'post');
            service.addMark(1, 1, 5);
            expect(postSpy).toHaveBeenCalled();
        });
    });

    describe('#deleteMarkByMarkId', () => {
        test('should call DataLoaderService delete method', () => {
            const deleteSpy = jest.spyOn(dataLoaderServiceStub, 'delete');
            service.deleteMarkByMarkId(1);
            expect(deleteSpy).toHaveBeenCalled();
        });
    });
});
