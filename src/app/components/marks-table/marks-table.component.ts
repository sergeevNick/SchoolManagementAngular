import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MarkService } from '../../services/mark/mark.service';
import { Subject } from '../../entities/Subject';
import { Mark } from '../../entities/Mark';
import { Student } from '../../entities/Student';

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
    @Input() student: Student;
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
                    this.markService.getMarks(this.student.studentId, subject.subjectId).then((marks: Mark[]) => {
                        struct.marks = marks;
                    });
                    this.markStructList.push(struct);
                }
            }
        }
    }
}
