import { Component, HostListener } from '@angular/core';
import { NavItem } from './nav-item.model';
import { NavService } from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navItems: Array<NavItem> = this.navService.navItems;

  constructor(public navService: NavService) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.navService.refreshOffset();
  }
}
