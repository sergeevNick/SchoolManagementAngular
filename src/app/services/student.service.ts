import { Injectable } from '@angular/core';
import { DataLoaderService } from './data-loader.service';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class StudentService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getStudents(gradeId): Promise<any> {
        let apiURL = environment.urls.api + environment.urls.school.students.getStudentsByGradeId;
        apiURL = apiURL.replace(':gradeId', gradeId);
        return this.dataLoader.get(apiURL);
    }
}
