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
                getAll: '/grades.json'
            },
            subjects: {
                getSubjectsByGradeId: '/grades.:gradeId.subjects.json'
            },
            students: {
                getStudentsByGradeId: '/grades.:gradeId.students.json'
            },
            marks: {
                getMarkByStudentIdAndSubjectId: '/marks.students.:studentId.subjects.:subjectId.json',
                addMark: '/marks.students.:studentId.subjects.:subjectId.json',
                deleteMarkByMarkId: '/marks.:markId.json'
            },
            schedule: {
                getScheduleByClassId: '/grades.:gradeId.schedule.json'
            }
        }
    }
};
