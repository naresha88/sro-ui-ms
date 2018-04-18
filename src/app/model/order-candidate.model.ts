import { ActivityLog } from "./activity-log.model";

export class OrderCandidate {
    public orderCandidateId: string;
    public factoryApplication: string;
    public releasedDate: string;
    public status: string;
    public activityLog: ActivityLog[];

    constructor(orderCandidateId: string, factoryApplication: string, releasedDate: string, status: string, activityLog: ActivityLog[]) {
        this.orderCandidateId = orderCandidateId;
        this.factoryApplication = factoryApplication;
        this.releasedDate = releasedDate;
        this.status = status;
        this.activityLog = activityLog;
    }
}