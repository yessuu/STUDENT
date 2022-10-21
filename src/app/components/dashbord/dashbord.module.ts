//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordRoutingModule } from './dashbord-routing.module';
import { SharedModule } from '../shared/shared.module';

//COMPONENTES
import { NavbarComponent } from './navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeaderComponent } from './header/header.component';
import { TableStudentComponent } from './table-student/table-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';

//PIPES
import { BooleanATextoPipe } from 'src/app/pipes/boolean-a-texto.pipe';
import { BooleanIconsDirective } from 'src/app/directive/boolean-icons.directive';

@NgModule({
  
  declarations: [
    HeaderComponent,
    TableStudentComponent,
    DashbordComponent,
    NavbarComponent,
    AddStudentComponent,
    HomeComponent, 
    BooleanATextoPipe,
    BooleanIconsDirective,
    
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    SharedModule,
    
  ]
})

export class DashbordModule { }
