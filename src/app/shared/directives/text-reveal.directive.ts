import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

const TEXT_SELECTOR = 'p, blockquote, figcaption, li';
const SKIP_SELECTOR = [
  '[aria-hidden="true"]',
  '[data-no-reveal]',
  '[appScrollTextFill]',
  '[appCharacterScramble]',
  '[appLineReveal]',
  '.text-reveal',
  '.mono',
  '.eyebrow',
].join(',');

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

@Directive({
  selector: '[appTextReveal]',
  standalone: true,
})
export class TextRevealDirective implements AfterViewInit, OnDestroy {
  private intersectionObserver?: IntersectionObserver;
  private mutationObserver?: MutationObserver;
  private readonly observed = new WeakSet<HTMLElement>();
  private scanTimer?: number;
  private destroyed = false;

  constructor(private readonly element: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('text-reveal--visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    );

    this.scan(this.element.nativeElement);
    this.scheduleScan();

    if (typeof MutationObserver !== 'undefined') {
      this.mutationObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node instanceof HTMLElement) {
              this.scan(node);
            }
          }
        }

        // Content can be inserted before its interpolated text is bound, so
        // rescan once the current change-detection pass has finished.
        this.scheduleScan();
      });

      this.mutationObserver.observe(this.element.nativeElement, {
        childList: true,
        subtree: true,
      });
    }
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.mutationObserver?.disconnect();
    this.intersectionObserver?.disconnect();
    if (typeof window !== 'undefined') {
      window.clearTimeout(this.scanTimer);
    }
  }

  private scheduleScan(): void {
    if (this.destroyed || this.scanTimer !== undefined || typeof window === 'undefined') {
      return;
    }

    this.scanTimer = window.setTimeout(() => {
      this.scanTimer = undefined;
      if (!this.destroyed) {
        this.scan(this.element.nativeElement);
      }
    }, 0);
  }

  private scan(root: HTMLElement): void {
    const elements = root.matches(TEXT_SELECTOR) ? [root] : [];
    elements.push(...root.querySelectorAll<HTMLElement>(TEXT_SELECTOR));

    let index = 0;

    for (const textElement of elements) {
      if (
        this.observed.has(textElement) ||
        textElement.closest(SKIP_SELECTOR) ||
        textElement.querySelector(TEXT_SELECTOR) ||
        !textElement.textContent?.trim()
      ) {
        continue;
      }

      this.observed.add(textElement);
      textElement.classList.add('text-reveal');
      textElement.style.setProperty(
        '--reveal-delay',
        `${Math.min(index * 70, 280)}ms`,
      );
      index++;
      this.intersectionObserver?.observe(textElement);
    }
  }
}
