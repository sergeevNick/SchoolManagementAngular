import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../../services/data-loader/data-loader.service';

@Injectable()
export class GradeService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getGrades(): Promise<any> {
        const apiURL = environment.urls.api + environment.urls.school.grades.getAll;
        return this.dataLoader.get(apiURL);
    }
}
