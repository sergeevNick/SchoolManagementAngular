import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../services/grade/grade.service';
import { StudentService } from '../../services/student/student.service';
import { SubjectService } from '../../services/subject/subject.service';
import { Grade } from '../../entities/Grade';
import { Subject } from '../../entities/Subject';
import { User } from '../../entities/User';

@Component({
    selector: 'app-submit-mark',
    templateUrl: './subject-selector.component.html',
    styleUrls: ['./subject-selector.component.scss']
})

export class SubjectSelectorComponent implements OnInit {
    title = 'Выставление оценок';

    selectedStudent: User;
    selectedGrade: Grade;
    selectedSubject: Subject;
    grades: Grade[] = [];
    students: User[] = [];
    subjects: Subject[] = [];

    constructor(private gradeService: GradeService,
                private studentService: StudentService,
                private subjectService: SubjectService) {
        this.gradeService.getGrades().then((grades: Grade[]) => {
            this.grades = grades;
        });
    }

    ngOnInit() {
    }

    getStudentsAndSubjects() {
        this.studentService.getStudentsByGradeId(this.selectedGrade.gradeId).then((students: User[]) => {
            this.students = students;
            this.selectedStudent = students[0];
        });

        this.subjectService.getSubjectsByGradeId(this.selectedGrade.gradeId).then((subjects: Subject[]) => {
            this.subjects = subjects;
        });
    }
}
