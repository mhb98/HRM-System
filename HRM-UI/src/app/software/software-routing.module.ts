import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareDashboardComponent } from './software-dashboard/software-dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: SoftwareDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRoutingModule { }
