import { Injectable } from '@angular/core';
import { Usuario} from '../interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

 listaUsuarios: Usuario [] = [
    { nombre:'Ana Suarez', curso:'Angular', profesor: 'Javier Alvez', fechaInicio:new Date(20022, 0, 1), inscripciones: true },
    { nombre:'Carolina Alvez', curso:'Angular', profesor: 'Javier Alvez', fechaInicio:new Date(20022, 3, 5), inscripciones: false },
    { nombre:'Lorenzo Miranda', curso:'React', profesor: 'Daniela Lopez', fechaInicio:new Date(20022, 1, 2), inscripciones: true },
    { nombre:'Juan Gonzalez', curso:'Angular', profesor: 'Javier Alvez', fechaInicio:new Date(20022, 4, 1),  inscripciones: false },
    { nombre:'Noelia Martinez', curso:'React', profesor: 'Daniela Lopez', fechaInicio:new Date(20022, 2, 4) ,inscripciones: true ,}
  ]
  logout: any;
  constructor() { }

getUsuario(){
  return this.listaUsuarios.slice();
}

deleteUser(index: number){
  this.listaUsuarios.splice(index, 1)
}

}
