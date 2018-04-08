import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../services/grade.service';
import { StudentService } from '../../services/student.service';
import { SubjectService } from '../../services/subject.service';
import { MarkService } from '../../services/mark.service';



@Component({
    selector: 'app-submit-mark',
    templateUrl: './submit-mark.component.html',
    styleUrls: ['./submit-mark.component.scss']
})

export class SubmitMarkComponent implements OnInit {
    title = 'Выставление оценок';

    selectedStudent: any;
    selectedGrade: any;
    selectedSubject: any;
    grades: any[] = [];
    students: any[] = [];
    subjects: any[] = [];
    marks: any[] = [];

    valuesOfMark: Number[] = [2, 3, 4, 5];
    selectedValue: Number;

    constructor(private gradeService: GradeService,
        private studentService: StudentService,
        private subjectService: SubjectService,
        private markService: MarkService) {
        this.gradeService.getGrades().then((grades: any[]) => {
            this.grades = grades;
        });
    }

    getStudentsAndSubjects() {
        this.studentService.getStudents(this.selectedGrade.gradeId).then((students: any[]) => {
            this.students = students;
            this.selectedStudent = students[0];
            console.log(this.selectedStudent);
        });

        this.subjectService.getSubjects(this.selectedGrade.gradeId).then((subjects: any[]) => {
            this.subjects = subjects;
        });
    }

    getStudentMarks() {
        console.log('in func', this.selectedSubject, this.selectedStudent);
        if (this.selectedSubject && this.selectedStudent) {
            this.markService.getMarks(this.selectedStudent.studentId, this.selectedSubject.subjectId)
                .then((marks: any[]) => {
                    console.log(marks);
                    this.marks = marks;
                });
        }
    }


    addMark() {
        if (this.selectedStudent && this.selectedSubject) {
            this.markService.addMark(this.selectedStudent.studentId, this.selectedSubject.subjectId, this.selectedValue)
                .then((res: any) => {
                    this.marks.push(res);
                });
        }
    }

    deleteMark(selectedMarkId) {
        this.markService.deleteMarkByMarkId(selectedMarkId)
            .then(res => {
                this.marks = this.marks
                    .filter(mark => mark.markId !== selectedMarkId);
            });
    }

    ngOnInit() {
    }

}
