import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school.service';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  title = 'Просмотр оценок';

  selectedStudent: any;
  selectedGrade: any;
  grades: any[];
  students: any[];
  subjects: any[];

  constructor(private service: SchoolService) {
    this.service.getGrades().then((grades: any[]) => {
      this.grades = grades;
      console.log(grades);
    });
  };

  ngOnInit() {
  }

  getStudentsAndSubjects() {
    this.service.getStudents(this.selectedGrade.gradeId).then((students: any[]) => {
      this.students = students;
      this.selectedStudent = students[0];
    });

    this.service.getSubjects(this.selectedGrade.gradeId).then((subjects: any[]) => {
      this.subjects = subjects;
    });
  }
}
