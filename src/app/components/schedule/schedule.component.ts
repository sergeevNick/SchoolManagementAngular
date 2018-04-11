import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../services/grade/grade.service';
import { ScheduleService } from '../../services/schedule/schedule.service';


@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    title = 'Расписание';

    selectedGradeId: any;
    grades: any[] = [];
    schedules: any[] = [];

    constructor(private gradeService: GradeService,
        private scheduleService: ScheduleService) {
        this.gradeService.getGrades().then((grades: any[]) => {
            this.grades = grades;
        });
    }

    ngOnInit() {
    }

    getSchedule() {
        this.scheduleService.getSchedule(this.selectedGradeId).then((schedules: any[]) => {
            this.schedules = schedules;
        });
    }
}
