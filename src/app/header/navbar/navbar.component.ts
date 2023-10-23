import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Section {
  label: string;
}


const sections: Section[] = [
  { label: 'home'}, { label: 'about'}, { label: 'work'}, { label: 'resume'}, { label: 'contact'}
]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  @Input() dropdownState: boolean = false;
  @Output() mobileDropdownStateChange: EventEmitter<boolean>  = new EventEmitter<boolean>();

  public sections: Section[] = sections;

  public hoveredIndex: number = 0;
  public activeIndex: number = 0;

  public getIndex(target: Element | string): number {
    let sectionLabel: string|null = null;

    if (typeof target !== 'string') {
      sectionLabel = target.getAttribute('section')
    }

    return sections.findIndex(
      section => section.label === (sectionLabel ?? target)
    )
  }

  public setActive(event: any): void {
    try {
      event.stopPropagation();
      const activeSection = document.querySelector(`section[section="${event.target.getAttribute('section')}"]`);
      activeSection?.scrollIntoView({ behavior: "smooth"})
    } catch (e) {}
    this.activeIndex = this.getIndex(event.target);
    this.mobileDropdownStateChange.emit(false)
  }
  public setHover(event: any): void {
    event.stopPropagation(); this.hoveredIndex = this.getIndex(event.target)
  }
  public resetHover(): void {
    this.hoveredIndex = this.activeIndex;
  }
}
