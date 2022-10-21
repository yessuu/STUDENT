import { Data } from "@angular/router";

export interface Usuario{
    nombre: string;
    curso: string;
    profesor : string ;
    fechaInicio: Data;
    inscripciones: boolean;
   
}