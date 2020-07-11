import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', 
    //canActivate: [AuthGuard],
   component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, ConfigService, AuthService],
  exports: [RouterModule],
})
export class AppRoutingModule {}
