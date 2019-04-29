import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string) {
    return value
      .split(' ')
      .filter(x => !!x)
      .map(x => x[0].toUpperCase() + x.slice(1, x.length))
      .join(' ');
  }
}
