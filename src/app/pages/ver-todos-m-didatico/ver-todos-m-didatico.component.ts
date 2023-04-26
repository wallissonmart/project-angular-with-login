import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDesign } from 'src/app/models/AllDesigns';
import { DesignsService } from 'src/app/services/designs.service';

@Component({
  selector: 'app-ver-todos-m-didatico',
  templateUrl: './ver-todos-m-didatico.component.html',
  styleUrls: ['./ver-todos-m-didatico.component.css'],
})
export class VerTodosMDidaticoComponent {
  designs: ProductDesign[] = [];
  currentUser = JSON.parse(localStorage.getItem('currentUser') as string);

  constructor(private router: Router, private designsService: DesignsService) {
    this.getAllDesigns();
  }

  openModePresentation(id: string) {
    window.open(`http://editor.trakto.io/presentation/p/${id}`, '_blank');
  }

  getAllDesigns() {
    this.designsService.listAllDesigns(this.currentUser.token).subscribe({
      next: (response) => {
        this.designs = response.data.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        console.log(this.designs);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
