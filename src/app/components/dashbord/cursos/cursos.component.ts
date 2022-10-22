import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/interfaces/cursos';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  listaCursos: Cursos [] = [];

  constructor(
    ) { }

  ngOnInit(): void {
  }

}
