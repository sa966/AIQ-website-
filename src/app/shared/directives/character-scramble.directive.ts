import { Directive } from '@angular/core';

@Directive({
  selector: '[appCharacterScramble], [data-scramble]',
  standalone: true,
})
export class CharacterScrambleDirective {
  // Disabled text scramble / decoding animation per user request ("dancing text")
}
