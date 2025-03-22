import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'humanize',
    standalone: false
})

 export class HumanizePipe implements PipeTransform {
 transform(value: string) {
 value = value.replace(/([A-Z])/g, ' $1').trim();
 return value;
 }
}
