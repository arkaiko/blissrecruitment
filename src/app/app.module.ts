import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { LookForServerHealthComponent } from './look-for-server-health/look-for-server-health.component';
import { ListScreenComponent } from './list-screen/list-screen.component';
import { DetailsScreenComponent } from './details-screen/details-screen.component';
import { ShareScreenComponent } from './share-screen/share-screen.component';
import { MonitorizeConnectionComponent } from './monitorize-connection/monitorize-connection.component';

@NgModule({
  declarations: [
    AppComponent,
    LookForServerHealthComponent,
    ListScreenComponent,
    DetailsScreenComponent,
    ShareScreenComponent,
    MonitorizeConnectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
