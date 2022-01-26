import { Injectable } from '@angular/core';
import { NavItem } from './nav-item.model';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public navItems: Array<NavItem> = new Array<NavItem>(
    {
      title: 'Home',
      iconName: 'bi bi-house-door'
    },
    {
      title: 'Profile',
      iconName: 'bi bi-person'
    },
    {
      title: 'Messages',
      iconName: 'bi bi-chat-dots'
    },
    {
      title: 'Photos',
      iconName: 'bi bi-camera'
    },
    {
      title: 'Settings',
      iconName: 'bi bi-gear'
    }
  );
  public selected: NavItem = this.navItems[0];
}
