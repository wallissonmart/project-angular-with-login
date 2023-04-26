import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ProductDesign } from 'src/app/models/AllDesigns';
import { DesignsService } from 'src/app/services/designs.service';

@Component({
  selector: 'app-material-didatico',
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.css'],
})
export class MaterialDidaticoComponent {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  designs: ProductDesign[] = [];
  currentUser = JSON.parse(localStorage.getItem('currentUser') as string);

  constructor(private router: Router, private designsService: DesignsService) {
    this.getLast10Designs();
  }

  goTo(route: string) {
    this.router.navigate([`${route}`]);
  }

  openModePresentation(id: string) {
    window.open(`http://editor.trakto.io/presentation/p/${id}`, '_blank');
  }

  getLast10Designs() {
    this.designsService.listLast10Designs(this.currentUser.token).subscribe({
      next: (response) => {
        this.designs = response.data;
        console.log(this.designs);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
