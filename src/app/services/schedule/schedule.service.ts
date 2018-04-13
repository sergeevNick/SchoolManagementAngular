import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../data-loader/data-loader.service';
import { Schedule } from '../../entities/Schedule';

@Injectable()
export class ScheduleService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getScheduleByGradeId(gradeId: Number): Promise<Schedule[]> {
        return this.dataLoader.get(environment.urls.school.schedule.getScheduleByGradeId, {gradeId: gradeId});
    }
}
