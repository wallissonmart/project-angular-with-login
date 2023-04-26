import { Component } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-workspace',
  templateUrl: './header-workspace.component.html',
  styleUrls: ['./header-workspace.component.css'],
})
export class HeaderWorkspaceComponent {
  faBell = faBell;
  faCalendarDays = faCalendarDays;
  faCaretDown = faCaretDown;
}
