import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { SoftwareRoutingModule } from './software/software-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SystemModule } from './system/system.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate: [AuthGuard]},
  {path: 'software', loadChildren: () => import('./software/software.module').then(m => m.SoftwareModule),canActivate: [AuthGuard]},
  {path: 'system', loadChildren: () => import('./system/system.module').then(m => m.SystemModule),canActivate: [AuthGuard]},
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), 
    AdminRoutingModule,
    SoftwareRoutingModule,
    SystemModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
