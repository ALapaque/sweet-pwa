import { Component } from '@angular/core';
import { NavItem } from './nav-item.model';
import { NavService } from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navItems: Array<NavItem> = this._navService.navItems;

  constructor(private _navService: NavService) {}
}
