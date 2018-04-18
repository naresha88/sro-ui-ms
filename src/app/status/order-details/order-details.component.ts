import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sro-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Output() goBack = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onGoBack() {
    this.goBack.emit();
  }

}
