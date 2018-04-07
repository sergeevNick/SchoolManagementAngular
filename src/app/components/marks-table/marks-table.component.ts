import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SchoolService } from '../../services/school.service';

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

  constructor(private service: SchoolService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.student || changes.subjects) {
      if (this.student) {
        this.markStructList = [];
        for (let subject of this.subjects) {
          let struct = new MarkStruct();
          struct.subject = subject;
          this.service.getMarks(this.student.studentId, subject.subjectId).then((marks: any[]) => {
            struct.marks = marks;
          });
          this.markStructList.push(struct);
        }
      }
    }
  }
}
