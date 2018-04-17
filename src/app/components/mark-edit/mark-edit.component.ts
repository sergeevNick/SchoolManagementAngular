import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MarkService } from '../../services/mark/mark.service';
import { Subject } from '../../entities/Subject';
import { Mark } from '../../entities/Mark';
import { User } from '../../entities/User';

@Component({
    selector: 'app-mark-edit',
    templateUrl: './mark-edit.component.html',
    styleUrls: ['./mark-edit.component.scss']
})
export class MarkEditComponent implements OnInit, OnChanges {
    @Input() selectedStudent: User;
    @Input() selectedSubject: Subject;

    marks: Mark[] = [];
    valuesOfMark: Number[] = [2, 3, 4, 5];
    selectedValue: Number;

    constructor(private markService: MarkService) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.selectedSubject && this.selectedStudent) {
            this.markService.getMarksByStudentIdAndSubjectId(this.selectedStudent.userId, this.selectedSubject.subjectId)
                .then((marks: Mark[]) => {
                    this.marks = marks;
                });
        }
    }

    addMark() {
        if (this.selectedStudent && this.selectedSubject) {
            this.markService.addMark(this.selectedStudent.userId, this.selectedSubject.subjectId, this.selectedValue)
                .then((res: any) => {
                    this.marks.push(res);
                });
        }
    }

    deleteMark(selectedMarkId: Number) {
        this.markService.deleteMarkByMarkId(selectedMarkId)
            .then(res => {
                this.marks = this.marks
                    .filter(mark => mark.markId !== selectedMarkId);
            });
    }

}
