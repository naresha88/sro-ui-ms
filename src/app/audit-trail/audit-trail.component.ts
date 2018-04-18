import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sro-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.css']
})
export class AuditTrailComponent implements OnInit {

  selectedOrder = '';

  constructor() { }

  ngOnInit() {
  }

  onSelectOrder() {

  }

}
