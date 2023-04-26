import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abertura',
  templateUrl: './abertura.component.html',
  styleUrls: ['./abertura.component.css'],
})
export class AberturaComponent {
  constructor(private router: Router) {
    // ...
  }

  goTo(route: string) {
    this.router.navigate([`${route}`]);
  }
}
