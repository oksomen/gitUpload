import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'dash', component:DashboardComponent},
  {path:'form', component:FormComponent},
  {path:'user', component:UserComponent},
  {path:'edit/:_id', component:EditFormComponent},
  
];

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
