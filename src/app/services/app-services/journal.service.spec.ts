import { JournalService } from './journal.service';
import { MarkService } from '../data-services/mark/mark.service';
import Mock = jest.Mock;


describe('JournalService', () => {
    let service: JournalService;

    const marks = [
        {
            markId: 5,
            value: 3,
            date: '2018-04-07'
        }
    ];

    const subjects = [
        {
            subjectId: 4,
            name: 'Физика',
            room: 32
        },
        {
            subjectId: 5,
            name: 'Алгебра',
            room: 36
        },
        {
            subjectId: 6,
            name: 'Геометрия',
            room: 37
        }
    ];

    const journal = {
        studentId: 1,
        journalItems: [{
            subject: {name: 'Физика', room: 32, subjectId: 4},
            marks: [{date: '2018-04-07', markId: 5, value: 3}]
        }, {
            subject: {name: 'Алгебра', room: 36, subjectId: 5},
            marks: [{date: '2018-04-07', markId: 5, value: 3}]
        }, {
            subject: {name: 'Геометрия', room: 37, subjectId: 6},
            marks: [{date: '2018-04-07', markId: 5, value: 3}]
        }]
    };

    const MockMarkService = jest.fn<MarkService>(() => ({
        getMarksByStudentIdAndSubjectId: jest.fn(() => new Promise(resolve => resolve(marks)))
    }));
    const markService = new MockMarkService();

    beforeEach(() => {
        service = new JournalService(markService);
    });

    it('should create an instance of JournalService', () => {
        expect(service).toBeDefined();
    });

    describe('#getJournal', () => {
        it('should return journal for student', async () => {
            const result = await service.getJournal(subjects, 1);
            expect(result).toEqual(journal);
            expect(markService.getMarksByStudentIdAndSubjectId).toHaveBeenCalledTimes(3);
            expect((markService.getMarksByStudentIdAndSubjectId as Mock).mock.calls[0]).toEqual([1, 4]);
            expect((markService.getMarksByStudentIdAndSubjectId as Mock).mock.calls[1]).toEqual([1, 5]);
            expect((markService.getMarksByStudentIdAndSubjectId as Mock).mock.calls[2]).toEqual([1, 6]);
        });
    });
});
