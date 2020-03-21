import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from '../../entities/subject';
import { User } from '../../entities/user';
import { JournalService } from '../../services/app-services/journal.service';
import { Journal } from '../../entities/journal';


@Component({
    selector: 'app-marks-table',
    templateUrl: './marks-table.component.html',
    styleUrls: ['./marks-table.component.scss']
})
export class MarksTableComponent implements OnChanges {
    @Input() student: User;
    @Input() subjects: Subject[] = [];

    journal: Journal;

    constructor(private journalService: JournalService) {
        this.journal = new Journal();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.student) {
            if (this.student && this.subjects) {
                this.journal = this.journalService.getJournal(this.subjects, this.student.userId);
            }
        }
    }
}
