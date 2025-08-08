import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starPip',
  standalone: false
})
export class StarPipPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
