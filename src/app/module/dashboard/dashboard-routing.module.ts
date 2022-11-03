import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { EditFormComponent } from "./edit-form/edit-form.component";
import { FormComponent } from "./form/form.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  {
    path: "dash",
    component: DashboardComponent,
    children: [
      { path: "form", component: FormComponent },
      { path: "user", component: UserComponent },
      { path: "edit/:_id", component: EditFormComponent },
      {path: 'dashboard', component:Dashboard1Component}
    ],
  },

  // {path:'form', component:FormComponent},
  // {path:'user', component:UserComponent},
  // {path:'edit/:_id', component:EditFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
