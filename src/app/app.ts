import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { TextRevealDirective } from './shared/directives/text-reveal.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, TextRevealDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event.constructor.name === 'NavigationEnd') {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    });
  }
}
