import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from 'src/app/cv.service';
import { Cv } from 'src/app/cvmodel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  cv: Cv | undefined;
  id: number;
  
constructor(private route: ActivatedRoute,private cvService:CvService ,private router :Router)
{
  this.id = Number(this.route.snapshot.paramMap.get('id'));
  this.cv = this.cvService.getCv(this.id);
}
deleteCv()
{
  this.cvService.deleteCv(this.id);
  this.router.navigate(['/']);
}

}
