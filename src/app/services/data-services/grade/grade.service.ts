import { Injectable } from '@angular/core';
import { DataLoaderService } from '../data-loader/data-loader.service';
import { environment } from '../../../../environments/environment';
import { Grade } from '../../../entities/grade';


@Injectable()
export class GradeService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getGrades(): Promise<Grade[]> {
        return this.dataLoader.get(environment.urls.school.grades.getAll);
    }
}
