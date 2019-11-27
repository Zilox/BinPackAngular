import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'methodeName'
})
export class MethodeNamePipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 0 :
        return `Methode`;
      default:
        return '';
    }
  }

}
