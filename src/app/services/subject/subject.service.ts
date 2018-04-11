import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../../services/data-loader/data-loader.service';

@Injectable()
export class SubjectService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getSubjectsByGradeId(gradeId): Promise<any> {
        let apiURL = environment.urls.api + environment.urls.school.subjects.getSubjectsByGradeId;
        apiURL = apiURL.replace(':gradeId', gradeId);
        return this.dataLoader.get(apiURL);
    }
}
