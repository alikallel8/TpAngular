import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() cvs: any;
   
@Output() selectedItem = new EventEmitter();
selectItem() {
    this.selectedItem.emit(this.cvs);
   
  } 
}
