import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataLoaderService } from '../../services/data-loader/data-loader.service';

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
