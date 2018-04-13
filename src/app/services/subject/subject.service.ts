import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../data-loader/data-loader.service';
import { Subject } from '../../entities/Subject';

@Injectable()
export class SubjectService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getSubjectsByGradeId(gradeId: Number): Promise<Subject[]> {
        return this.dataLoader.get(environment.urls.school.subjects.getSubjectsByGradeId, {gradeId: gradeId});
    }
}
