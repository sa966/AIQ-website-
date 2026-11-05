import { Component, computed, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FAQS, HOME, IMAGES, NEWS, PRODUCTS } from '../../site.config';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CharacterScrambleDirective } from '../../shared/directives/character-scramble.directive';
import { LineRevealDirective } from '../../shared/directives/line-reveal.directive';
import { ScrollTextFillDirective } from '../../shared/directives/scroll-text-fill.directive';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    ScrollRevealDirective,
    CharacterScrambleDirective,
    LineRevealDirective,
    ScrollTextFillDirective,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home implements OnDestroy {
  readonly home = HOME;
  readonly products = PRODUCTS;
  readonly news = NEWS.slice(0, 5);
  readonly faqs = FAQS;
  readonly images = IMAGES;

  readonly openFaq = signal<number | null>(0);
  readonly activeProductIndex = signal(0);
  readonly slideDirection = signal<1 | -1>(1);
  readonly autoplayEnabled = signal(true);
  readonly currentProduct = computed(() => this.products[this.activeProductIndex()]);

  private pointerPaused = false;
  private focusPaused = false;
  private autoplayTimer: number | undefined;

  constructor() {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      this.autoplayEnabled.set(false);
    }

    if (this.autoplayEnabled()) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  toggleFaq(index: number) {
    this.openFaq.update((current) => (current === index ? null : index));
  }

  showProduct(index: number, direction: 1 | -1) {
    this.slideDirection.set(direction);
    this.activeProductIndex.set((index + this.products.length) % this.products.length);
  }

  moveProduct(direction: 1 | -1) {
    this.showProduct(this.activeProductIndex() + direction, direction);
  }

  toggleAutoplay() {
    if (this.autoplayEnabled()) {
      this.autoplayEnabled.set(false);
      this.stopAutoplay();
      return;
    }

    this.autoplayEnabled.set(true);
    this.startAutoplay();
  }

  pauseForPointer() {
    this.pointerPaused = true;
  }

  resumeAfterPointer() {
    this.pointerPaused = false;
  }

  pauseForFocus() {
    this.focusPaused = true;
  }

  resumeAfterFocus(event: FocusEvent) {
    const carousel = event.currentTarget;
    if (
      carousel instanceof HTMLElement &&
      event.relatedTarget instanceof Node &&
      carousel.contains(event.relatedTarget)
    ) {
      return;
    }

    this.focusPaused = false;
  }

  private startAutoplay() {
    if (typeof window === 'undefined' || this.autoplayTimer !== undefined) {
      return;
    }

    this.autoplayTimer = window.setInterval(() => {
      if (this.autoplayEnabled() && !this.pointerPaused && !this.focusPaused) {
        this.moveProduct(1);
      }
    }, 6000);
  }

  private stopAutoplay() {
    if (this.autoplayTimer === undefined || typeof window === 'undefined') {
      return;
    }

    window.clearInterval(this.autoplayTimer);
    this.autoplayTimer = undefined;
  }

  scrollSlider(direction: number) {
    if (typeof document === 'undefined') return;
    const slider = document.getElementById('chainSlider');
    if (slider) {
      const scrollAmount = 370;
      slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}
