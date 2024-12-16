import { Component } from '@angular/core';
import { EmbaucheService } from '../../embauche.service'
import { Cv } from '../../cvmodel'

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  hired: Cv[];
  constructor(public embaucheService: EmbaucheService) {
    this.hired= this.embaucheService.getHired();
   }
   dismissCv(cv: Cv): void {
    this.embaucheService.setDismissed(cv);
    this.hired = this.embaucheService.getHired(); // Update the list of hired CVs
  }
}
