import { Component } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  images: string[] = [    '../../assets/images/malek.jpg',
    '../../assets/images/mec.jpg',
    '../../assets/images/med.jpg'];
  imageWidth: number = 300; // Default image width
  intervalTime: number = 2000; // Interval time for switching images
  currentImage: string = '';

  constructor() {
    this.createImageObservable().subscribe((image) => {
      this.currentImage = image;
    });
  }

  createImageObservable(): Observable<string> {
    return timer(0, this.intervalTime).pipe(
      map((index) => this.images[index % this.images.length])
    );
  }
}
