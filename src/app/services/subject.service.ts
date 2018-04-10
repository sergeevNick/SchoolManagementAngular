import { Injectable } from '@angular/core';
import { DataLoaderService } from './data-loader.service';
import { environment } from '../../environments/environment';

@Injectable()
export class SubjectService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getSubjects(gradeId): Promise<any> {
        let apiURL = environment.urls.api + environment.urls.school.subjects.getSubjectsByGradeId;
        apiURL = apiURL.replace(':gradeId', gradeId);
        return this.dataLoader.get(apiURL);
    }
}
