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
                getSubjectsByGradeId: '/grades/:gradeId/subjects'
            },
            students: {
                getStudentsByGradeId: '/grades/:gradeId/students'
            },
            marks: {
                getMarksByStudentIdAndSubjectId: '/marks/students/:studentId/subjects/:subjectId',
                addMarkByStudentIdAndSubjectId: '/marks/students/:userId/subjects/:subjectId',
                deleteMarkByMarkId: '/marks/:markId'
            },
            schedule: {
                getScheduleByGradeId: '/grades/:gradeId/schedule'
            }
        }
    }
};
