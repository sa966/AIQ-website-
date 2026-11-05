import { Component, signal } from '@angular/core';
import { FAQS } from '../../site.config';
import { CharacterScrambleDirective } from '../../shared/directives/character-scramble.directive';

@Component({
  selector: 'app-faq',
  imports: [CharacterScrambleDirective],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  readonly faqs = FAQS;
  readonly openIndex = signal<number | null>(0);

  toggle(index: number) {
    this.openIndex.update((cur) => (cur === index ? null : index));
  }
}
