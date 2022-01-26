import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
    }
  );
  public selected: NavItem = this.navItems[0];

  public leftOffset$: BehaviorSubject<string> = new BehaviorSubject<string>('0px');

  public refreshOffset(): void {
    console.log('refreshOffset');
    const item: HTMLElement = document.getElementsByClassName('active')[0] as HTMLElement;

    console.log('item', item.offsetLeft);


    this.leftOffset$.next(this._pxToEm(item.offsetLeft - 40) + 'em');
  }

  private _pxToEm(value: number): number {
    return ((value * 3) / 4) / 12
  }
}
