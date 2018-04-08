import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../services/grade.service';
import { StudentService } from '../../services/student.service';
import { SubjectService } from '../../services/subject.service';



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

    constructor(private gradeService: GradeService,
        private studentService: StudentService,
        private subjectService: SubjectService) {
        this.gradeService.getGrades().then((grades: any[]) => {
            this.grades = grades;
        });
    }

    ngOnInit() {
    }

    getStudentsAndSubjects() {
        this.studentService.getStudents(this.selectedGrade.gradeId).then((students: any[]) => {
            this.students = students;
            this.selectedStudent = students[0];
        });

        this.subjectService.getSubjects(this.selectedGrade.gradeId).then((subjects: any[]) => {
            this.subjects = subjects;
        });
    }
}
