import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const clamp = (value: number, min = 0, max = 1): number =>
  Math.min(max, Math.max(min, value));

@Directive({
  selector: '[appScrollTextFill]',
  standalone: true,
})
export class ScrollTextFillDirective implements AfterViewInit, OnDestroy {
  /** Viewport fraction where the fill starts (element top). */
  @Input() fillStart = 0.9;

  /** Viewport fraction where the fill completes (element top). */
  @Input() fillEnd = 0.25;

  private frame = 0;
  private destroyed = false;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.el.nativeElement.classList.add('scroll-text-fill');
    this.el.nativeElement.style.setProperty('--fill', '0');

    if (prefersReducedMotion()) {
      this.el.nativeElement.style.setProperty('--fill', '1');
      return;
    }

    this.update();
    window.addEventListener('scroll', this.schedule, { passive: true });
    window.addEventListener('resize', this.schedule, { passive: true });
  }

  private schedule = (): void => {
    if (this.frame || this.destroyed) {
      return;
    }

    this.frame = requestAnimationFrame(() => {
      this.frame = 0;
      this.update();
    });
  };

  private update(): void {
    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();
    const viewport = window.innerHeight || 1;
    const start = viewport * this.fillStart;
    const distance = Math.max(1, viewport * (this.fillStart - this.fillEnd));
    const fill = clamp((start - rect.top) / distance);

    element.style.setProperty('--fill', fill.toFixed(4));
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    cancelAnimationFrame(this.frame);
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.schedule);
      window.removeEventListener('resize', this.schedule);
    }
  }
}
