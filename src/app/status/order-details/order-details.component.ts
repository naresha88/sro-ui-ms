import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderCandidate } from '../../model/order-candidate.model';

@Component({
  selector: 'sro-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input('selectedOrder') selectedOrder : OrderCandidate;
  @Output() goBack = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onGoBack() {
    this.goBack.emit();
  }

}
