import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../data-loader/data-loader.service';
import { Subject } from '../../entities/Subject';

@Injectable()
export class SubjectService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getSubjectsByGradeId(gradeId: Number): Promise<Subject[]> {
        let apiURL = environment.urls.api + environment.urls.school.subjects.getSubjectsByGradeId;
        apiURL = apiURL.replace(':gradeId', gradeId.toString());
        return this.dataLoader.get(apiURL);
    }
}
