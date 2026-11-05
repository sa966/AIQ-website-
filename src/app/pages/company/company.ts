import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../site.config';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CharacterScrambleDirective } from '../../shared/directives/character-scramble.directive';
import { LineRevealDirective } from '../../shared/directives/line-reveal.directive';

@Component({
  selector: 'app-company',
  imports: [RouterLink, ScrollRevealDirective, CharacterScrambleDirective, LineRevealDirective],
  templateUrl: './company.html',
  styleUrl: './company.scss',
})
export class Company {
  readonly company = COMPANY;
}
