import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { SignInComponent } from './modules/admin-auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './modules/admin-auth/components/sign-up/sign-up.component';
import { ManageShippingComponent } from './modules/admin/components/manage-shipping/manage-shipping.component';
import { authGuard } from './route-gard/auth.guard';

const routes: Routes = [
  {path:'admin-dashboard',component:AdminDashboardComponent,canActivate: [authGuard]},
  {path:'',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
