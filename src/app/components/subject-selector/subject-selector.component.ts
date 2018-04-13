import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../services/grade/grade.service';
import { StudentService } from '../../services/student/student.service';
import { SubjectService } from '../../services/subject/subject.service';
import { MarkService } from '../../services/mark/mark.service';
import { Student } from '../../entities/Student';
import { Grade } from '../../entities/Grade';
import { Subject } from '../../entities/Subject';
import { Mark } from '../../entities/Mark';

@Component({
    selector: 'app-submit-mark',
    templateUrl: './subject-selector.component.html',
    styleUrls: ['./subject-selector.component.scss']
})

export class SubjectSelectorComponent implements OnInit {
    title = 'Выставление оценок';

    selectedStudent: Student;
    selectedGrade: Grade;
    selectedSubject: Subject;
    grades: Grade[] = [];
    students: Student[] = [];
    subjects: Subject[] = [];
    marks: Mark[] = [];

    valuesOfMark: Number[] = [2, 3, 4, 5];
    selectedValue: Number;

    constructor(private gradeService: GradeService,
        private studentService: StudentService,
        private subjectService: SubjectService,
        private markService: MarkService) {
        this.gradeService.getGrades().then((grades: Grade[]) => {
            this.grades = grades;
        });
    }

    ngOnInit() {
    }

    getStudentsAndSubjects() {
        this.studentService.getStudentsByGradeId(this.selectedGrade.gradeId).then((students: Student[]) => {
            this.students = students;
            this.selectedStudent = students[0];
        });

        this.subjectService.getSubjectsByGradeId(this.selectedGrade.gradeId).then((subjects: Subject[]) => {
            this.subjects = subjects;
        });
    }

    getStudentMarks() {
        if (this.selectedSubject && this.selectedStudent) {
            this.markService.getMarksByStudentIdAndSubjectId(this.selectedStudent.studentId, this.selectedSubject.subjectId)
                .then((marks: Mark[]) => {
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

    deleteMark(selectedMarkId: Number) {
        this.markService.deleteMarkByMarkId(selectedMarkId)
            .then(res => {
                this.marks = this.marks
                    .filter(mark => mark.markId !== selectedMarkId);
            });
    }
}
