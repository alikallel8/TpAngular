import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  @Input() cvs: any; 
  @Output() selectedItem = new EventEmitter();

  get firstThreeCVs() {
    return this.cvs.slice(0, 3); // Get the first 3 elements from the `cvs` array
  }
  selectItem(selectedItem: any) {
    this.selectedItem.emit(selectedItem);
  }
 }
