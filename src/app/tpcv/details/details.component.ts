import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private route: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the CV (real or fake) based on the API or fallback
    this.cvService.getCv(this.id).subscribe({
      next: (data) => {
        this.cv = data;
      },
      error: (err) => {
        console.error('Error fetching CV:', err);
        this.toastr.error('Unable to fetch CV from API. Showing local data.', 'Error');
        this.cv = this.cvService.getFakeCv(this.id);
      }
    });
  }

  deleteCv(): void {
    // Implement delete logic here
    this.cvService.deleteCv(this.id);
    this.router.navigate(['/']);
  }
}
