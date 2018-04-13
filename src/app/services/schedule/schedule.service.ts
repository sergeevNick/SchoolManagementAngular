import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../data-loader/data-loader.service';
import { Schedule } from '../../entities/Schedule';

@Injectable()
export class ScheduleService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getScheduleByGradeId(gradeId: Number): Promise<Schedule[]> {
        let apiURL = environment.urls.api + environment.urls.school.schedule.getScheduleByGradeId;
        apiURL = apiURL.replace(':gradeId', gradeId.toString());
        return this.dataLoader.get(apiURL);
    }
}
