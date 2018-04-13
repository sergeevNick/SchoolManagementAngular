// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    urls: {
        api: 'http://localhost:4200/assets/data',
        school: {
            grades: {
                getAll: '/grades/grades.json'
            },
            subjects: {
                getSubjectsByGradeId: '/subjects/grades.:gradeId.subjects.json'
            },
            students: {
                getStudentsByGradeId: '/students/grades.:gradeId.students.json'
            },
            marks: {
                getMarksByStudentIdAndSubjectId: '/marks/marks.students.:studentId.subjects.:subjectId.json',
                addMark: '/marks/marks.added.json',
                deleteMarkByMarkId: '/marks/marks.:markId.json'
            },
            schedule: {
                getScheduleByGradeId: '/schedule/grades.:gradeId.schedule.json'
            }
        }
    }
};
