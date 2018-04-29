import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MarkService } from '../../services/mark/mark.service';
import { Subject } from '../../entities/subject';
import { Mark } from '../../entities/mark';
import { User } from '../../entities/user';


class MarkStruct {
    subject: Subject;
    marks: Mark[];
}

@Component({
    selector: 'app-marks-table',
    templateUrl: './marks-table.component.html',
    styleUrls: ['./marks-table.component.scss']
})
export class MarksTableComponent implements OnChanges {
    @Input() student: User;
    @Input() subjects: Subject[] = [];

    public markStructList: MarkStruct[] = [];

    constructor(private markService: MarkService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.student) {
            if (this.student && this.subjects) {
                this.markStructList = [];
                for (const subject of this.subjects) {
                    const struct = new MarkStruct();
                    struct.subject = subject;
                    this.markService.getMarksByStudentIdAndSubjectId(this.student.userId, subject.subjectId).then((marks: Mark[]) => {
                        struct.marks = marks;
                    });
                    this.markStructList.push(struct);
                }
            }
        }
    }
}
