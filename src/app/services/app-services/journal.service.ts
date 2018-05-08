import { Injectable } from '@angular/core';
import { MarkService } from '../data-services/mark/mark.service';
import { Journal } from '../../entities/journal';
import { JournalItem } from '../../entities/journal-item';
import { Subject } from '../../entities/subject';
import { Mark } from '../../entities/mark';


@Injectable()
export class JournalService {
    private journal: Journal;

    constructor(private markService: MarkService) {
        this.journal = new Journal();
    }

    getJournal(subjects: Subject[], studentId: number): Journal {
        this.journal.studentId = studentId;
        this.journal.journalItems = [];
        for (const subject of subjects) {
            this.journal.journalItems.push(this.getJournalItem(subject, studentId));
        }
        return this.journal;
    }

    private getJournalItem(subject: Subject, studentId: number): JournalItem {
        const journalItem = new JournalItem();
        journalItem.subject = subject;
        this.markService.getMarksByStudentIdAndSubjectId(studentId, subject.subjectId).then((marks: Mark[]) => {
            journalItem.marks = marks;
        });
        return journalItem;
    }
}
