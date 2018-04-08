import { Injectable } from '@angular/core';
import { DataLoaderService } from './data-loader.service';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class ScheduleService {

    constructor(private dataLoader: DataLoaderService) {
    }

    getSchedule(gradeId): Promise<any> {
        let apiURL = environment.urls.api + environment.urls.school.schedule.getScheduleByClassId;
        apiURL = apiURL.replace(':gradeId', gradeId);
        return this.dataLoader.get(apiURL);
    }
}
