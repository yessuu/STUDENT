import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss']
})
export class TableStudentComponent implements OnInit {
  
listaUsuarios:  Usuario[] = [];

  columnas: string[] = ['nombre', 'curso', 'profesor', 'fechaInicio', 'inscripciones','acciones'];
  dataSource!: MatTableDataSource<any>;


  
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort)sort!: MatSort;

  constructor(private _UsuariosService: UsuariosService){}

  ngOnInit(): void {
    this.cargarUsuarios();
  }


  cargarUsuarios(){
    this.listaUsuarios = this._UsuariosService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listaUsuarios);
  }

 
  deleteUser(index: number){
   console.log(index)
    this._UsuariosService.deleteUser(index);
    this.cargarUsuarios();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort

  }
}
 
 /* cargarUsuarios(){
    this.listaUsuario = this._usuarioService.getUsuario();
  }*/
