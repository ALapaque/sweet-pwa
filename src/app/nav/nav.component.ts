import { Component, Input } from '@angular/core';
import { NavItem } from '../nav-item.model';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.css' ],
})
export class NavComponent {
  @Input() public navItems!: Array<NavItem>;

  constructor(public navService: NavService) {}

}
