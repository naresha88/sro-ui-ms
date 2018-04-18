import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { DroolsComponent } from './drools/drools.component';
import { OrderDetailsComponent } from './status/order-details/order-details.component';
import { AuditTrailDetailsComponent } from './audit-trail/audit-trail-details/audit-trail-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StatusComponent,
    AuditTrailComponent,
    DroolsComponent,
    OrderDetailsComponent,
    AuditTrailDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
