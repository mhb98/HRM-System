import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { SoftwareRoutingModule } from './software/software-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component:AppComponent},

  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'software', loadChildren: () => import('./software/software.module').then(m => m.SoftwareModule)},
  {path: 'system', loadChildren: () => import('./system/system.module').then(m => m.SystemModule)},
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), 
    AdminRoutingModule,
    SoftwareRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
