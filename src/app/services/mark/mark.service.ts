import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../../services/data-loader/data-loader.service';

@Injectable()
export class MarkService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getMarks(studentId, subjectId): Promise<any> {
        let apiURL = environment.urls.api + environment.urls.school.marks.getMarkByStudentIdAndSubjectId;
        apiURL = apiURL.replace(':studentId', studentId).replace(':subjectId', subjectId);
        return this.dataLoader.get(apiURL);
    }

    addMark(studentId, subjectId, value): Promise<any> {
        const body = JSON.stringify({ 'value': value });
        let apiURL = environment.urls.api + environment.urls.school.marks.addMark;
        apiURL = apiURL.replace(':studentId', studentId).replace(':subjectId', subjectId);
        return this.dataLoader.post(apiURL, body);
    }

    deleteMarkByMarkId(markId): Promise<any> {
        let apiURL = environment.urls.api + environment.urls.school.marks.deleteMarkByMarkId;
        apiURL = apiURL.replace(':markId', markId);
        return this.dataLoader.delete(apiURL);
    }
}
