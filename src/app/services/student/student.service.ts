import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../data-loader/data-loader.service';
import { User } from '../../entities/user';


@Injectable()
export class StudentService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getStudentsByGradeId(gradeId: number): Promise<User[]> {
        return this.dataLoader.get(environment.urls.school.students.getStudentsByGradeId, {gradeId: gradeId});
    }
}
