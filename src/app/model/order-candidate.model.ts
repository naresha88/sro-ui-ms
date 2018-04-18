export class OrderCandidate {
    public orderCandidateId: string;
    public factoryApplication: string;
    public releasedDate: string;
    public status: string;

    constructor(orderCandidateId: string, factoryApplication: string, releasedDate: string, status: string) {
        this.orderCandidateId = orderCandidateId;
        this.factoryApplication = factoryApplication;
        this.releasedDate = releasedDate;
        this.status = status;
    }
}