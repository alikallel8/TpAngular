import { Component } from '@angular/core';
import { CvService } from '../../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  cvs
constructor(private cvservice: CvService)
{
 this.cvs = this.cvservice.getCvs();
}
   show= false;

  selectedCV: any;
  selectItem(cv: any) {
    this.selectedCV = cv;
    console.log(this.selectedCV);
    this.show = true;
  }
}


// export class Cv {
//   id: number;
//   name: string;
//   firstname: string;
//   age: number
//   cin: string
//   job: string
//   path: string
// }
