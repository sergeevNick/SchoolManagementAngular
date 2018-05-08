import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DataLoaderService } from '../data-loader/data-loader.service';
import { Mark } from '../../../entities/mark';


@Injectable()
export class MarkService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getMarksByStudentIdAndSubjectId(studentId: number, subjectId: number): Promise<Mark[]> {
        return this.dataLoader.get(environment.urls.school.marks.getMarksByStudentIdAndSubjectId,
            {studentId: studentId, subjectId: subjectId});
    }

    addMark(studentId: number, subjectId: number, value: number): Promise<Mark> {
        const markValue = {value: value};
        return this.dataLoader.post(environment.urls.school.marks.addMarkByStudentIdAndSubjectId, markValue,
            {studentId: studentId, subjectId: subjectId});
    }

    deleteMarkByMarkId(markId: number): Promise<Mark> {
        return this.dataLoader.delete(environment.urls.school.marks.deleteMarkByMarkId, {markId: markId});
    }
}
