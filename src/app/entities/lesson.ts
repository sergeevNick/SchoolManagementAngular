export class Lesson {
    public lessonId: number;
    public startTime: string;
    public endTime: string;

    constructor(data: any = {}) {
        this.lessonId = data.lessonId || -1;
        this.startTime = data.startTime || '';
        this.endTime = data.endTime || '';
    }
}
