import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './auth/guard.guard';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: 'dashboard', canActivate:[GuardGuard] , loadChildren:()=>import
  ('./module/dashboard/dashboard.module')
  .then(res=>res.DashboardModule)},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
