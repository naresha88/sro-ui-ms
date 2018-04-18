import { Component, OnInit } from '@angular/core';
import { SalesRequest } from '../model/sales-request.model';
import { OrderCandidate } from '../model/order-candidate.model';

@Component({
  selector: 'sro-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  selectedOrder : OrderCandidate = null;

  constructor() { }

  ngOnInit() {
  }

  onSelectOrder(order) {
    this.selectedOrder = order;
  }

  onGoBack() {
    this.selectedOrder = null;
  }

  orders : SalesRequest[] = [
    new SalesRequest('Cart-129', 'Sales Express', '04/16/2018', 'Started', 
      [new OrderCandidate('Oc-129', 'OMX', '04/16/2018', 'Released'), new OrderCandidate('Oc-129', 'OMX', '04/16/2018', 'Completed')]),
    new SalesRequest('Cart-139', 'Sales Express', '04/16/2018', 'In Progress', 
      [new OrderCandidate('Oc-139', 'OMX', '04/16/2018', 'Failed')]),
    new SalesRequest('Cart-149', 'ADOPT', '04/16/2018', 'Completed', 
      [new OrderCandidate('Oc-149', 'EFMS', '04/16/2018', 'Completed')])
  ];

}
