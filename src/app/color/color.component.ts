import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
color = 'red';
  constructor() { }
  changeColor(input:HTMLInputElement) {
    this.color = input.value;
    input.value = '';
  }
  resetColor() {
    this.color = 'red'; 
  }
}
