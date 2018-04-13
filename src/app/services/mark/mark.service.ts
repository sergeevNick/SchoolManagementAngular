import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../data-loader/data-loader.service';
import { Mark } from '../../entities/Mark';

@Injectable()
export class MarkService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getMarksByStudentIdAndSubjectId(studentId: Number, subjectId: Number): Promise<Mark[]> {
        return this.dataLoader.get(environment.urls.school.marks.getMarksByStudentIdAndSubjectId,
            {studentId: studentId, subjectId: subjectId});
    }

    addMark(studentId: Number, subjectId: Number, value: Number): Promise<Mark> {
        return this.dataLoader.post(environment.urls.school.marks.addMark, value,
            {studentId: studentId, subjectId: subjectId});
    }

    deleteMarkByMarkId(markId: Number): Promise<Mark> {
        return this.dataLoader.delete(environment.urls.school.marks.deleteMarkByMarkId, {markId: markId});
    }
}
