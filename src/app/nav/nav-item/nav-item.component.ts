import { AfterViewInit, Component, HostBinding, Input, Output } from '@angular/core';
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
export class NavItemComponent implements AfterViewInit{
  @Input() public item!: NavItem;

  constructor(private _navService: NavService) {}

  public ngAfterViewInit(): void {
    this._navService.refreshOffset();
  }

  @HostBinding('class.active')
  public get isSelected(): boolean {
    return this.item === this._navService.selected;
  }

  public select(): void {
    this._navService.selected = this.item;
    setTimeout(() => this._navService.refreshOffset(), 125);
  }
}
