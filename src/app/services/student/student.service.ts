import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../../services/data-loader/data-loader.service';

@Injectable()
export class StudentService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getStudentsByGradeId(gradeId): Promise<any> {
        let apiURL = environment.urls.api + environment.urls.school.students.getStudentsByGradeId;
        apiURL = apiURL.replace(':gradeId', gradeId);
        return this.dataLoader.get(apiURL);
    }
}
