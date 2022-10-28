import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EditFormComponent } from './edit-form/edit-form.component';

@NgModule({
  declarations: [
    UserComponent,
    FormComponent,
    DashboardComponent,
    EditFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatProgressSpinnerModule,MatSelectModule,MatSidenavModule,MatSnackBarModule,
    MatTooltipModule,MatDatepickerModule,
    MatRadioModule,MatGridListModule,MatBadgeModule,
    MatTreeModule,MatToolbarModule,MatCheckboxModule,
    MatCardModule,MatTableModule,MatTabsModule,MatSortModule,
    MatFormFieldModule,MatDialogModule,
    MatIconModule,MatButtonModule,MatListModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,FormsModule,ReactiveFormsModule
  ]
})
export class DashboardModule { }
