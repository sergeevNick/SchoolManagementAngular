import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school.service';



@Component({
  selector: 'app-submit-mark',
  templateUrl: './submit-mark.component.html',
  styleUrls: ['./submit-mark.component.scss']
})

export class SubmitMarkComponent implements OnInit {
  selectedStudent: any;
  selectedGrade: any;
  selectedSubject: any;
  grades: any[];
  students: any[];
  subjects: any[];
  marks: any[];

  valuesOfMark: Number[] = [2, 3, 4, 5];
  selectedValue: Number;

  constructor(private service: SchoolService) {
    this.service.getGrades().then((grades: any[]) => {
      this.grades = grades;
    });
  };

  getStudentsAndSubjects() {
    this.service.getStudents(this.selectedGrade.gradeId).then((students: any[]) => {
      this.students = students;
      this.selectedStudent = students[0];
    });

    this.service.getSubjects(this.selectedGrade.gradeId).then((subjects: any[]) => {
      this.subjects = subjects;
      this.selectedSubject = subjects[0];
    });
  }

  getStudentMarks() {
    if (this.selectedSubject && this.selectedStudent) {
      this.service.getMarks(this.selectedStudent.studentId, this.selectedSubject.subjectId).then((marks: any[]) => {
        this.marks = marks;
      });
    }
  }


  addMark() {
    if (this.selectedStudent && this.selectedSubject) {
      this.service.addMark(this.selectedStudent.studentId, this.selectedSubject.subjectId, this.selectedValue)
        .then((res: any) => {
          this.marks.push(res);
        });
    }
  }

  deleteMark(selectedMarkId) {
    this.service.deleteMark(selectedMarkId).then(res => {
      this.marks = this.marks
        .filter(mark => mark.markId !== selectedMarkId);
    })
      .catch(error => console.log(error));
  }



  ngOnInit() {
  }

}
