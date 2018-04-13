import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../services/grade/grade.service';
import { ScheduleService } from '../../services/schedule/schedule.service';
import { Grade } from '../../entities/Grade';
import { Schedule } from '../../entities/Schedule';


@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    title = 'Расписание';

    selectedGradeId: Number;
    grades: Grade[] = [];
    schedules: Schedule[];

    constructor(private gradeService: GradeService,
        private scheduleService: ScheduleService) {
        this.gradeService.getGrades().then((grades: Grade[]) => {
            this.grades = grades;
        });
    }

    ngOnInit() {
    }

    getScheduleByGradeId() {
        this.scheduleService.getScheduleByGradeId(this.selectedGradeId).then((schedules: Schedule[]) => {
            this.schedules = schedules;
        });
    }
}
