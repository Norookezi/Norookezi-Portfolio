import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(HeaderComponent) private headerComponent!: HeaderComponent;

  title = `Norookezi's Portfolio`;
  constructor(private elementRef: ElementRef) {}

    ngAfterViewInit() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.headerComponent.callSetActiveInNav(entry);
          }
        });
      }, options);

      const sections = this.elementRef.nativeElement.querySelectorAll('[section]');
      sections.forEach((section: Element) => {
        observer.observe(section);
      });

    }
}
