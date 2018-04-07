import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { SubmitMarkComponent } from './components/submit-mark/submit-mark.component';

const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'marks',
    component: StudentListComponent
  },
  {
    path: 'marks/submit',
    component: SubmitMarkComponent
  },
  {
    path: '',
    redirectTo: '/schedule',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/schedule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
