import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CvService } from 'src/app/cv.service';
import { Cv } from 'src/app/cvmodel';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() cv!: Cv;
   cvService=inject(CvService);
item: any;
affItem(item : any) {
    //this.selectedItem.emit(this.cv);
    this.cvService.selectItem(item);
    console.log(item)
  } 
}
