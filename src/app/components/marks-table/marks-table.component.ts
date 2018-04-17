import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MarkService } from '../../services/mark/mark.service';
import { Subject } from '../../entities/Subject';
import { Mark } from '../../entities/Mark';
import { User } from '../../entities/User';

class MarkStruct {
    subject: Subject;
    marks: Array<Mark>;
}

@Component({
    selector: 'app-marks-table',
    templateUrl: './marks-table.component.html',
    styleUrls: ['./marks-table.component.scss']
})

export class MarksTableComponent implements OnInit, OnChanges {
    @Input() student: User;
    @Input() subjects: Subject[] = [];

    public markStructList: Array<MarkStruct> = [];

    constructor(private markService: MarkService) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.student || changes.subjects) {
            if (this.student) {
                this.markStructList = [];
                for (const subject of this.subjects) {
                    const struct = new MarkStruct();
                    struct.subject = subject;
                    console.log('pered func', this.student.userId);
                    this.markService.getMarksByStudentIdAndSubjectId(this.student.userId, subject.subjectId).then((marks: Mark[]) => {
                        struct.marks = marks;
                        console.log(this.student.userId);
                    });
                    this.markStructList.push(struct);
                }
            }
        }
    }
}
