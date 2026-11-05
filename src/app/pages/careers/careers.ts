import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRAND, CAREERS, ROLES } from '../../site.config';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CharacterScrambleDirective } from '../../shared/directives/character-scramble.directive';
import { LineRevealDirective } from '../../shared/directives/line-reveal.directive';

@Component({
  selector: 'app-careers',
  imports: [RouterLink, ScrollRevealDirective, CharacterScrambleDirective, LineRevealDirective],
  templateUrl: './careers.html',
  styleUrl: './careers.scss',
})
export class Careers {
  readonly careers = CAREERS;
  readonly brand = BRAND;
  readonly roles = ROLES.slice(0, 6);

  readonly tab = signal(0);
  readonly activeTab = computed(() => CAREERS.tabs[this.tab()]);

  select(index: number) {
    this.tab.set(index);
  }
}
