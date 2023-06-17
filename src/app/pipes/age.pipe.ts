import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): unknown {
    console.log(value)
    let currentYear = new Date().getFullYear();
    let userYear = new Date(value).getFullYear();
    let userAge = currentYear - userYear;
    return userAge;
  }

}
