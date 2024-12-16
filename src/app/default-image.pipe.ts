import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DefaultImagePipe',
  
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string, defaultImagePath: string = '../assets/images/potato.png'): string {
    return path.trim() ? path : defaultImagePath; 
}


}
