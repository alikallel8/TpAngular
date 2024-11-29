import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DefaultImagePipe'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, defaultImagePath: string = '../assets/images/potato.png'): string {
    return value.trim() ? value : defaultImagePath; 
}


}
