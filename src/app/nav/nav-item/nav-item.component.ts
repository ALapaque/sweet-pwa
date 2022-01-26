import { Component, HostBinding, Input, Output } from '@angular/core';
import { NavItem } from '../../nav-item.model';
import { NavService } from '../../nav.service';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: [ './nav-item.component.css' ],
  host: {
    class: 'nav-item'
  }
})
export class NavItemComponent {
  @Input() public item!: NavItem;

  constructor(private _navService: NavService) {}

  @HostBinding('class.active')
  public get isSelected(): boolean {
    return this.item === this._navService.selected;
  }

  public select(): void {
    this._navService.selected = this.item
  }
}
