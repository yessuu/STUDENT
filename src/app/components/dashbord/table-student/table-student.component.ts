import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.scss']
})
export class TableStudentComponent implements OnInit {

  data: any = [
    {id:1, nombre:'Ana Suarez', curso:'Angular', profesor: 'Javier Alvez', tutor:'Maria Diaz' },
    {id:1, nombre:'Carolina Alvez', curso:'Angular', profesor: 'Javier Alvez', tutor:'Maria Diaz' },
    {id:1, nombre:'Lorenzo Miranda', curso:'React', profesor: 'Daniela Lopez', tutor:'Mariana Coppa' },
    {id:1, nombre:'Juan Gonzalez', curso:'Angular', profesor: 'Javier Alvez', tutor:'Maria Diaz' },
    {id:1, nombre:'Noelia Martinez', curso:'React', profesor: 'Daniela Lopez', tutor:'Mariana Coppa' }
  ]
 
  constructor() { }

  ngOnInit() {
    
  }


}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/