import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string) {
    return value
      .split(' ')
      .filter(x => !!x)
      .map(s => s[0].toUpperCase() + s.slice(1, s.length))
      .join(' ');
  }
}

@NgModule({
  declarations: [CapitalizePipe],
  exports: [CapitalizePipe],
})
export class CapitalizeModule {}
