import { OrderCandidate } from "./order-candidate.model";

export class SalesRequest {
    public salesRequestId: string;
    public salesApplication: string;
    public startDate: string;
    public status: string;
    public orderCandidates: OrderCandidate[]

    constructor(salesRequestId: string, salesApplication: string, startDate: string, status: string, orderCandidates: OrderCandidate[]) {
        this.salesRequestId = salesRequestId;
        this.salesApplication = salesApplication;
        this.startDate = startDate;
        this.status = status;
        this.orderCandidates = orderCandidates;
    }
}
