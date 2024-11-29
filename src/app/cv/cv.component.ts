import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
cvs = [
    {
      id: 1,
      name: 'Kallel',
      firstname: 'Ali',
      age: 22,
      cin: '12345678',
      job: 'Student',
      path: '../../assets/images/mec.jpg'
    },
    {
      id: 2,
      name: 'Karrab',
      firstname: 'Mohamed',
      age: 26,
      cin: '87654321',
      job: 'Pentester',
      path: '../../assets/images/med.jpg'
    },
    {
      id: 3,
      name: 'Gharbi',
      firstname: 'Mohamed Malek',
      age: 24,
      cin: '23456789',
      job: 'Manager',
      path: '../../assets/images/malek.jpg'
    },
    {
      id: 4,
      name: 'Mr',
      firstname: 'Potato',
      age: 25,
      cin: '888888888',
      job: 'Mstuednt',
      path: '     '
    }
  ];
   show= false;

  selectedCV: any;
  selectItem(cv: any) {
    this.selectedCV = cv;
    console.log(this.selectedCV);
    this.show = true;
  }
}
