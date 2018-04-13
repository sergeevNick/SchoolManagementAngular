import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../data-loader/data-loader.service';
import { Mark } from '../../entities/Mark';

@Injectable()
export class MarkService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getMarksByStudentIdAndSubjectId(studentId: Number, subjectId: Number): Promise<Mark[]> {
        let apiURL = environment.urls.api + environment.urls.school.marks.getMarksByStudentIdAndSubjectId;
        apiURL = apiURL.replace(':studentId', studentId.toString()).replace(':subjectId', subjectId.toString());
        return this.dataLoader.get(apiURL);
    }

    addMark(studentId: Number, subjectId: Number, value: Number): Promise<Mark> {
        let apiURL = environment.urls.api + environment.urls.school.marks.addMark;
        apiURL = apiURL.replace(':studentId', studentId.toString()).replace(':subjectId', subjectId.toString());
        return this.dataLoader.post(apiURL, value);
    }

    deleteMarkByMarkId(markId: Number): Promise<Mark> {
        let apiURL = environment.urls.api + environment.urls.school.marks.deleteMarkByMarkId;
        apiURL = apiURL.replace(':markId', markId.toString());
        return this.dataLoader.delete(apiURL);
    }
}
