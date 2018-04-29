import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MarkService } from '../../services/mark/mark.service';
import { Subject } from '../../entities/subject';
import { Mark } from '../../entities/mark';
import { User } from '../../entities/user';


@Component({
    selector: 'app-mark-edit',
    templateUrl: './mark-edit.component.html',
    styleUrls: ['./mark-edit.component.scss']
})
export class MarkEditComponent implements OnChanges {
    @Input() selectedStudent: User;
    @Input() selectedSubject: Subject;

    marks: Mark[] = [];
    valuesOfMark: number[] = [2, 3, 4, 5];
    selectedValue: number;

    constructor(private markService: MarkService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.selectedSubject && this.selectedStudent) {
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

    deleteMark(selectedMarkId: number) {
        this.markService.deleteMarkByMarkId(selectedMarkId)
            .then(res => {
                this.marks = this.marks
                    .filter(mark => mark.markId !== selectedMarkId);
            });
    }

}
