import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanATexto'
})
export class BooleanATextoPipe implements PipeTransform {

  transform(value: boolean, ...args: string[]): string {
    console.log(value)
    console.log(args)
    if(value){
      return args[0];
    }
    else{
      return args[1]
    }
  }

}
