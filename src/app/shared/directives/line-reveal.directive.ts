import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

@Directive({
  selector: '[appLineReveal], [data-line-reveal]',
  standalone: true,
})
export class LineRevealDirective implements AfterViewInit, OnDestroy {
  /** Delay between each revealed line, in milliseconds. */
  @Input() staggerDelay = 80;

  /** Duration of a single line reveal, in milliseconds. */
  @Input() lineDuration = 900;

  private observer?: IntersectionObserver;
  private resizeTimer?: number;
  private revealed = false;
  private destroyed = false;
  private originalText = '';
  private built = false;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;

    // Only split plain-text headings. Splitting elements that contain other
    // markup would destroy component/directive bindings inside them.
    if (prefersReducedMotion() || element.children.length > 0) {
      return;
    }

    this.originalText = element.textContent ?? '';
    if (!this.originalText.trim()) {
      return;
    }

    const build = () => {
      if (this.destroyed) {
        return;
      }
      this.buildLines();
      this.observe();
    };

    build();

    // Re-measure once web fonts settle, as long as the lines have not been
    // revealed yet. This keeps line breaks accurate without delaying the
    // initial paint or the animation.
    if (typeof document !== 'undefined' && document.fonts) {
      if (document.fonts.status !== 'loaded') {
        document.fonts.ready.then(() => {
          if (!this.destroyed && !this.revealed) {
            this.buildLines();
          }
        });
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onResize, { passive: true });
    }
  }

  private observe(): void {
    if (this.observer || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const element = this.el.nativeElement;

    this.observer = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.revealed = true;
            element.classList.add('line-reveal--visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    this.observer.observe(element);
  }

  private buildLines(): void {
    const element = this.el.nativeElement;
    const words = this.originalText.trim().split(/\s+/);
    if (!words.length) {
      return;
    }

    element.textContent = '';
    element.classList.add('line-reveal');

    const spans = words.map((word) => {
      const span = document.createElement('span');
      span.textContent = word;
      element.appendChild(span);
      element.appendChild(document.createTextNode(' '));
      return span;
    });

    const lines: string[][] = [];
    let current: string[] = [];
    let lastTop: number | null = null;

    spans.forEach((span, index) => {
      const top = span.offsetTop;
      if (lastTop === null || Math.abs(top - lastTop) < 2) {
        current.push(words[index]);
      } else {
        lines.push(current);
        current = [words[index]];
      }
      lastTop = top;
    });

    if (current.length) {
      lines.push(current);
    }

    element.textContent = '';

    lines.forEach((lineWords, index) => {
      const mask = document.createElement('span');
      mask.className = 'line-mask';

      const inner = document.createElement('span');
      inner.className = 'line-inner';
      inner.textContent = lineWords.join(' ');
      inner.style.setProperty('--line-delay', `${index * this.staggerDelay}ms`);
      inner.style.setProperty('--line-duration', `${this.lineDuration}ms`);

      mask.appendChild(inner);
      element.appendChild(mask);
    });

    this.built = true;

    if (this.revealed) {
      element.classList.add('line-reveal--visible');
    }
  }

  private onResize = (): void => {
    if (this.revealed || !this.built || typeof window === 'undefined') {
      return;
    }

    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => {
      if (!this.destroyed && !this.revealed) {
        this.buildLines();
      }
    }, 150);
  };

  ngOnDestroy(): void {
    this.destroyed = true;
    this.observer?.disconnect();
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
      window.clearTimeout(this.resizeTimer);
    }
  }
}
