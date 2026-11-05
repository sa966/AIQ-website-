import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BRAND, CONTACT } from '../../site.config';
import { CharacterScrambleDirective } from '../../shared/directives/character-scramble.directive';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CharacterScrambleDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly contact = CONTACT;
  readonly brand = BRAND;
  readonly sent = signal(false);
  readonly values = signal<Record<string, string>>({});

  set(name: string, value: string) {
    this.values.update((current) => ({ ...current, [name]: value }));
  }

  value(name: string) {
    return this.values()[name] ?? '';
  }

  submit() {
    const lines = this.contact.form.fields
      .map((field) => `${field.placeholder}\n${this.value(field.name)}`)
      .filter((line) => line.trim().length > 0)
      .join('\n\n');

    const href = `mailto:${this.brand.email}?subject=${encodeURIComponent(
      'AIQ enquiry',
    )}&body=${encodeURIComponent(lines)}`;

    window.location.href = href;
    this.sent.set(true);
  }
}
