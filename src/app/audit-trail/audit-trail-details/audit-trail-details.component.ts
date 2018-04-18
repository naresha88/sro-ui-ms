import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderCandidate } from '../../model/order-candidate.model';
import { SalesRequest } from '../../model/sales-request.model';

@Component({
  selector: 'sro-audit-trail-details',
  templateUrl: './audit-trail-details.component.html',
  styleUrls: ['./audit-trail-details.component.css']
})
export class AuditTrailDetailsComponent implements OnInit {

  @Input('selectedOrder') selectedOrder : SalesRequest;
  @Output() goBack = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onGoBack() {
    this.goBack.emit();
  }

}
