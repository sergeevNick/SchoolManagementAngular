import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  selectedGradeId: any;
  grades: any[];
  schedules: any[] = [];

  constructor(private service: SchoolService) { 
    this.service.getGrades().then((grades: any[]) => {
      this.grades = grades;
      //this.selectedGradeId = grades[0].gradeId;
    });
  }

  ngOnInit() {
  }

  getSchedule() {
    this.service.getSchedule(this.selectedGradeId).then((schedules: any[]) => {
      this.schedules = schedules;
    });
  }
}
