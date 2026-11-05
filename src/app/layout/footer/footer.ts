import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER } from '../../site.config';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly footer = FOOTER;
}
