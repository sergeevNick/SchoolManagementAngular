import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MarkService } from '../../services/mark/mark.service';

class MarkStruct {
  subject: any;
  marks: Array<any>;
}

@Component({
  selector: 'app-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrls: ['./marks-table.component.scss']
})

export class MarksTableComponent implements OnInit, OnChanges {
  @Input() student: any;
  @Input() subjects: any[] = [];

  valuesOfMark: Number[] = [2, 3, 4, 5];
  selectedValue: Number;
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
          this.markService.getMarks(this.student.studentId, subject.subjectId).then((marks: any[]) => {
            struct.marks = marks;
          });
          this.markStructList.push(struct);
        }
      }
    }
  }
}
