import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'methodeName'
})
export class MethodeNamePipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1 :
        return `Methode Emmunération totale`;
      case 2 :
        return `Branch and Bound`;
      case 3 :
        return `Methode dynamique dense`;
      case 4 :
        return `Heuristique Gloutonne`;
      case 5:
        return `Relaxation en continu`;
      default:
        return '';
    }
  }

}
