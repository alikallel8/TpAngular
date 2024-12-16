import { Component, Input } from '@angular/core';
import { EmbaucheService } from '../../embauche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
@Input() cv: any ;
constructor(private embaucheService: EmbaucheService, private route: Router)
{}
Hire()
{
  this.embaucheService.setHired(this.cv)
  //setTimeout(() => {
 //   this.embaucheService.statusMessage = ''; // Clear the message
 // }, 5000);
}
detail()
{
  this.route.navigate(['cv',this.cv.id]);
}

}
