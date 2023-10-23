import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild(NavbarComponent) private navbarComponent!: NavbarComponent;

  public mobileDropdownState: boolean = false;

  public toggleMobileDropdownState(state?: boolean) {
    this.mobileDropdownState = state ?? !this.mobileDropdownState;
  }

  public callSetActiveInNav(target: any) {
    this.navbarComponent.setActive(target);
    this.navbarComponent.resetHover();
  }
}
