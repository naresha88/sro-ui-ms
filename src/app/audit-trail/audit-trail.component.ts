import { Component, OnInit } from '@angular/core';
import { SalesRequest } from '../model/sales-request.model';
import { OrderCandidate } from '../model/order-candidate.model';
import { ActivityLog } from '../model/activity-log.model';

@Component({
  selector: 'sro-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.css']
})
export class AuditTrailComponent implements OnInit {

  selectedOrder : SalesRequest = null;

  constructor() { }

  ngOnInit() {
  }

  onAuditTrail(order) {
    this.selectedOrder = order;
    console.log(order);
  }

  onGoBack() {
    this.selectedOrder = null;
  }

  orders : SalesRequest[] = [
    new SalesRequest('Cart-129', 'Sales Express', '04/16/2018', 'Started', 
      [new OrderCandidate('Oc-129', 'OMX', '04/16/2018', 'Released',
      [new ActivityLog('Request Received', '04/16/2018', 'Success'), new ActivityLog('Sent to Analysis', '04/16/2018', 'Success')]), new OrderCandidate('Oc-129', 'OMX', '04/16/2018', 'Completed', 
      [new ActivityLog('Request Received', '04/16/2018', 'Success'), new ActivityLog('Sent to Analysis', '04/16/2018', 'Success')])],
      [new ActivityLog('Request Received', '04/16/2018', 'Success')]),
    new SalesRequest('Cart-139', 'Sales Express', '04/16/2018', 'In Progress', 
      [new OrderCandidate('Oc-139', 'OMX', '04/16/2018', 'Failed',
      [new ActivityLog('Request Received', '04/16/2018', 'Success'), new ActivityLog('Sent to Analysis', '04/16/2018', 'Success')])],
      [new ActivityLog('Request Received', '04/16/2018', 'Success'), new ActivityLog('Sent to Analysis', '04/16/2018', 'Success')]),
    new SalesRequest('Cart-149', 'ADOPT', '04/16/2018', 'Completed', 
      [new OrderCandidate('Oc-149', 'EFMS', '04/16/2018', 'Completed', 
      [new ActivityLog('Request Received', '04/16/2018', 'Success'), new ActivityLog('Sent to Analysis', '04/16/2018', 'Success')])],
      [new ActivityLog('Request Received', '04/16/2018', 'Success'), new ActivityLog('Sent to Analysis', '04/16/2018', 'Success'), new ActivityLog('Analysis Complete', '04/16/2018', 'Success')])
  ];

}
