import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../data-loader/data-loader.service';
import { Student } from '../../entities/Student';

@Injectable()
export class StudentService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getStudentsByGradeId(gradeId: Number): Promise<Student[]> {
        return this.dataLoader.get(environment.urls.school.students.getStudentsByGradeId, {gradeId: gradeId});
    }
}
