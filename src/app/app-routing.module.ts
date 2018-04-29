import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { StudentSelectorComponent } from './components/student-selector/student-selector.component';
import { SubjectSelectorComponent } from './components/subject-selector/subject-selector.component';


const routes: Routes = [
    {
        path: 'schedule',
        component: ScheduleComponent
    },
    {
        path: 'marks',
        component: StudentSelectorComponent
    },
    {
        path: 'marks/submit',
        component: SubjectSelectorComponent
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

export class AppRoutingModule {
}
