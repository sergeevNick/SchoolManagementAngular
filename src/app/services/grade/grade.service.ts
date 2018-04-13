import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../data-loader/data-loader.service';

@Injectable()
export class GradeService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getGrades(): Promise<any> {
        return this.dataLoader.get(environment.urls.school.grades.getAll);
    }
}
