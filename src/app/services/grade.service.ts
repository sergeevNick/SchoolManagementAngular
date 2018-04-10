import { Injectable } from '@angular/core';
import { DataLoaderService } from './data-loader.service';
import { environment } from '../../environments/environment';

@Injectable()
export class GradeService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getGrades(): Promise<any> {
        const apiURL = environment.urls.api + environment.urls.school.grades.getAll;
        return this.dataLoader.get(apiURL);
    }
}
