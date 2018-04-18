export class ActivityLog {
    activity: string;
    time: string;
    status: string;

    constructor(activity: string, time: string, status: string) {
        this.activity = activity;
        this.time = time;
        this.status = status;
    }
}