import { Component, OnInit, Output, EventEmitter } from '@angular/core';
/* import { EventEmitter } from 'events'; */

@Component({
  selector: 'sro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tabChange = new EventEmitter();
  activeTab;

  constructor() { }

  ngOnInit() {
  }

  onSelectTab(tabName) {
    this.activeTab = tabName;
    this.tabChange.emit(this.activeTab);
  }

}
