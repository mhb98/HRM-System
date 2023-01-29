import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SoftwareModule } from './software/software.module';
import { SystemModule } from './system/system.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SoftwareModule,
    SystemModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
