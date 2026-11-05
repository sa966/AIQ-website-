import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { BRAND, PRODUCTS, Product } from '../../site.config';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CharacterScrambleDirective } from '../../shared/directives/character-scramble.directive';
import { LineRevealDirective } from '../../shared/directives/line-reveal.directive';

@Component({
  selector: 'app-products',
  imports: [RouterLink, ScrollRevealDirective, CharacterScrambleDirective, LineRevealDirective],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})

export class Products {
  readonly brand = BRAND;
  readonly products = PRODUCTS;
  readonly active = signal<string | null>(null);

  private readonly route = inject(ActivatedRoute);

  private readonly queried = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get('p'))),
    { initialValue: null },
  );

  readonly activeProduct = computed<Product | null>(
    () => PRODUCTS.find((p) => p.slug === this.active()) ?? null,
  );

  constructor() {
    // Deep links like /products?p=hydra open that product on load.
    queueMicrotask(() => this.queried() && this.open(this.queried()!));
  }

  open(slug: string) {
    this.active.update((cur) => (cur === slug ? null : slug));
  }
}
