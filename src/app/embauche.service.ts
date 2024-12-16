import { Injectable } from '@angular/core';
import { Cv } from './cvmodel'; 
import { ToastrService } from 'ngx-toastr'; // Importer ToastrService


@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  cvs: Cv[];
 // statusMessage: string;
 

  constructor( private toastr: ToastrService) { 
    this.cvs = [];
   //this.statusMessage = ''; 

  }

  getHired(): Cv[] {
    return this.cvs;
  }

  setHired(embauched: Cv): void {
    const isAlreadyHired = this.cvs.some(cv => cv.id === embauched.id);
    if (!isAlreadyHired) {
      this.cvs.push(embauched);
      this.toastr.success('CV embauché avec succès!', 'Succès');
    } else {
      this.toastr.error('Ce CV est déjà sélectionné.', 'Erreur');
    }
  }
  

  setDismissed(dismissed: Cv): void {
    const index = this.cvs.findIndex(cv => cv.id === dismissed.id);
    if (index !== -1) {
      this.cvs.splice(index, 1); 
      this.toastr.info('CV renvoyé avec succès.', 'Information');
    } 
  }
}
