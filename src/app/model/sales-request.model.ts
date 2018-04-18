import { OrderCandidate } from "./order-candidate.model";
import { ActivityLog } from "./activity-log.model";

export class SalesRequest {
    public salesRequestId: string;
    public salesApplication: string;
    public startDate: string;
    public status: string;
    public orderCandidates: OrderCandidate[];
    public activityLog: ActivityLog[];

    constructor(salesRequestId: string, salesApplication: string, startDate: string, status: string, orderCandidates: OrderCandidate[], activityLog: ActivityLog[]) {
        this.salesRequestId = salesRequestId;
        this.salesApplication = salesApplication;
        this.startDate = startDate;
        this.status = status;
        this.orderCandidates = orderCandidates;
        this.activityLog = activityLog;
    }
}
