import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sro-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  selectedOrder = '';

  orders = [
    {
      salesRequestId: 'cart-129',
      orderCandidateId: '4645',
      salesApplication: 'Sales Express',
      factoryApplication: 'OMX',
      salesRequestStatus: 'Submitted',
      orderCandidateStatus: 'Submitted'
    },
    {
      salesRequestId: 'cart-131',
      orderCandidateId: '4647',
      salesApplication: 'Sales Express',
      factoryApplication: 'OMX',
      salesRequestStatus: 'In Progress',
      orderCandidateStatus: 'In Progress'
    },
    {
      salesRequestId: 'cart-133',
      orderCandidateId: '4648',
      salesApplication: 'Sales Express',
      factoryApplication: 'SSPP',
      salesRequestStatus: 'Released',
      orderCandidateStatus: 'Released'
    },
    {
      salesRequestId: 'cart-135',
      orderCandidateId: '4649',
      salesApplication: 'ADOPT',
      factoryApplication: 'EFMS',
      salesRequestStatus: 'Failed',
      orderCandidateStatus: 'Failed'
    },
    {
      salesRequestId: 'cart-136',
      orderCandidateId: '4651',
      salesApplication: 'Sales Express',
      factoryApplication: 'OMX',
      salesRequestStatus: 'Completed',
      orderCandidateStatus: 'Completed'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onSelectOrder() {
    this.selectedOrder = 'order1';
  }

  onGoBack() {
    this.selectedOrder = '';
  }

}
