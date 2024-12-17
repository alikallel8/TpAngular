import { Component, OnInit } from '@angular/core';
import { CvService } from '../../cv.service';
import { Cv } from '../../cvmodel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit{
  cvs: Cv[] = []; 
  selectedCV: Cv | null = null; 
  show: boolean = false; 
  errorMessage: string | null = null; 

  constructor(private cvService: CvService, private toastr: ToastrService) {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: () => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error('Unable to fetch CVs from API. Showing local data.', 'Error');
      }
    });
  }
  ngOnInit(): void {
    this.getItem();
  }

 /* // Handle CV selection
  selectItem(cv: Cv): void {
    this.selectedCV = cv;
    this.show = true;
  }*/
  
  getItem()
  {
    this.cvService.selectedItem$.subscribe({
      next : (item)=> {
        this.selectedCV=item;
        console.log(this.selectedCV)
        this.show = true;

      }
    })
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
