import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeaderComponent } from './header/header.component';
import { TableStudentComponent } from './table-student/table-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TableStudentComponent,
    DashbordComponent,
    NavbarComponent,
    AddStudentComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    SharedModule
  ]
})

export class DashbordModule { }
