import { Component } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-abertura',
  templateUrl: './header-abertura.component.html',
  styleUrls: ['./header-abertura.component.css'],
})
export class HeaderAberturaComponent {
  faBell = faBell;
  faCalendarDays = faCalendarDays;
  faCaretDown = faCaretDown;
}
