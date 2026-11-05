import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NEWS } from '../../site.config';
import { CharacterScrambleDirective } from '../../shared/directives/character-scramble.directive';
import { LineRevealDirective } from '../../shared/directives/line-reveal.directive';

@Component({
  selector: 'app-newsroom',
  imports: [RouterLink, CharacterScrambleDirective, LineRevealDirective],
  templateUrl: './newsroom.html',
  styleUrl: './newsroom.scss',
})
export class Newsroom {
  readonly news = NEWS;
}
