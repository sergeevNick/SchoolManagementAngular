import { Component } from '@angular/core';
import { GradeService } from '../../services/data-services/grade/grade.service';
import { ScheduleService } from '../../services/data-services/schedule/schedule.service';
import { Grade } from '../../entities/grade';
import { Schedule } from '../../entities/schedule';


@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
    title = 'Расписание';

    selectedGradeId: number;
    grades: Grade[] = [];
    schedules: Schedule[];

    constructor(private gradeService: GradeService,
                private scheduleService: ScheduleService) {
        this.gradeService.getGrades().then((grades: Grade[]) => {
            this.grades = grades;
        });
    }

    getScheduleByGradeId() {
        this.scheduleService.getScheduleByGradeId(this.selectedGradeId).then((schedules: Schedule[]) => {
            this.schedules = schedules;
        });
    }
}
