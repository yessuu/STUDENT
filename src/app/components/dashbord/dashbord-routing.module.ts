import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableStudentComponent } from './table-student/table-student.component';

const routes: Routes = [
    { path: '', component: DashbordComponent, children:[
        {path: 'home', component: HomeComponent},
        {path: 'usuarios', component: TableStudentComponent},
        {path: 'agregar', component: AddStudentComponent},
    ]},  
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DashbordRoutingModule { }
