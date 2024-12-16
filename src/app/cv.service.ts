import { Injectable } from '@angular/core';
import { Cv } from './cvmodel'; 

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [
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

  constructor() {}

  getCvs(): Cv[] { 
    return this.cvs;
  }
  getCv(id: number)
  {
    return this.cvs.find(cv => cv.id === id);
  }
  deleteCv(id: number): void {
    const index = this.cvs.findIndex(cv => cv.id === id);
    if (index !== -1) {
      this.cvs.splice(index, 1);
    } 
  }
}
