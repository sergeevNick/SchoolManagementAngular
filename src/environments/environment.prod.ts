export const environment = {
    production: true,
    urls: {
        api: 'http://localhost:8080',
        school: {
            grades: {
                getAll: '/grades',
                getGradeByGradeId: '/grades/:gradeId'
            },
            subjects: {
                getAll: '/subjects',
                getBySubjectId: '/subjects/:subjectId',
                getSubjectsByGradeId: '/grades/:gradeId/subjects'
            },
            students: {
                getAll: '/students',
                getStudentById: '/students/:studentId',
                getStudentsByGradeId: '/grades/:gradeId/students'
            },
            marks: {
                getAll: '/marks',
                getMarkById: '/marks/:markId',
                getMarkByStudentIdAndSubjectId: '/marks/students/:studentId/subjects/:subjectId',
                addMark: '/marks/students/:studentId/subjects/:subjectId',
                deleteMarkByMarkId: '/marks/:markId'
            },
            schedule: {
                getAll: '/schedules',
                getScheduleByScheduleId: '/schedules/:scheduleId',
                getScheduleByClassId: '/grades/:gradeId/schedule'
            }
        }
    }
};
