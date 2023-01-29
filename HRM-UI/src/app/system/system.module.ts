import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemDashboardComponent } from './system-dashboard/system-dashboard.component';


@NgModule({
  declarations: [
    SystemDashboardComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
