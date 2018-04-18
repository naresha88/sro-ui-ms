import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeTab : string = 'home';

  tabChanged(activeTab : string) {
    this.activeTab = activeTab;
  }

}
