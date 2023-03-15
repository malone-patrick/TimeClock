import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'available'
})
export class AvailablePipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    value = value.toLowerCase();
    if(value === 'shiftout' || value === 'lunchin' || value === 'breakin') {
      return 'Unavaliable';
    } else if(value === 'shiftin' || value === 'lunchout' || value === 'breakout') {
      return 'Avaliable';
    } else {
      return 'Error, Unknown State';
    }
  }

}
