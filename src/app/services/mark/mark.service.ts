import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../data-loader/data-loader.service';

@Injectable()
export class MarkService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getMarks(studentId: Number, subjectId: Number): Promise<any> {
        let apiURL = environment.urls.api + environment.urls.school.marks.getMarkByStudentIdAndSubjectId;
        apiURL = apiURL.replace(':studentId', studentId.toString()).replace(':subjectId', subjectId.toString());
        return this.dataLoader.get(apiURL);
    }

    addMark(studentId: Number, subjectId: Number, value: Number): Promise<any> {
        let apiURL = environment.urls.api + environment.urls.school.marks.addMark;
        apiURL = apiURL.replace(':studentId', studentId.toString()).replace(':subjectId', subjectId.toString());
        return this.dataLoader.post(apiURL, value);
    }

    deleteMarkByMarkId(markId: Number): Promise<any> {
        let apiURL = environment.urls.api + environment.urls.school.marks.deleteMarkByMarkId;
        apiURL = apiURL.replace(':markId', markId.toString());
        return this.dataLoader.delete(apiURL);
    }
}
