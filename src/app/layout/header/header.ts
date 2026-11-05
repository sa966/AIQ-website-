import { Component, DestroyRef, HostListener, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { BRAND, IMAGES, MENU, NAV } from '../../site.config';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly brand = BRAND;
  readonly images = IMAGES;
  readonly menu = MENU;
  readonly dock = NAV;

  readonly open = signal(false);
  readonly overDark = signal(false);

  constructor() {
    this.syncTone();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.open.set(false);
        this.syncTone();
      });
  }

  private ticking = false;

  @HostListener('window:scroll')
  onScroll() {
    if (!this.ticking) {
      this.ticking = true;
      requestAnimationFrame(() => {
        this.syncTone();
        this.ticking = false;
      });
    }
  }

  toggle() {
    this.open.update((value) => {
      document.body.style.overflow = value ? '' : 'hidden';
      return !value;
    });
  }

  close() {
    this.open.set(false);
    document.body.style.overflow = '';
  }

  private syncTone() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const sampleY = Math.min(80, window.innerHeight - 1);
    const elements = document.elementsFromPoint(window.innerWidth / 2, sampleY);
    const visited = new Set<Element>();

    for (const element of elements) {
      if (element.closest('.hdr, .menu')) continue;

      let current: Element | null = element;
      while (
        current &&
        current !== document.body &&
        current !== document.documentElement &&
        !visited.has(current)
      ) {
        visited.add(current);
        const style = window.getComputedStyle(current);
        const brightness = this.getBackgroundBrightness(style.backgroundColor, style.backgroundImage);

        if (brightness !== null) {
          this.overDark.set(brightness < 125);
          return;
        }

        current = current.parentElement;
      }
    }

    this.overDark.set(false);
  }

  private getBackgroundBrightness(backgroundColor: string, backgroundImage: string): number | null {
    const colorMatch = backgroundColor.match(
      /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/,
    );

    if (colorMatch) {
      const alpha = colorMatch[4] !== undefined ? Number(colorMatch[4]) : 1;
      if (alpha > 0.05) {
        return this.brightness(
          Number(colorMatch[1]),
          Number(colorMatch[2]),
          Number(colorMatch[3]),
        );
      }
    }

    if (!backgroundImage.includes('gradient')) return null;

    const colors = backgroundImage.match(/rgba?\([^)]*\)|#[\da-f]{3,8}\b/gi) ?? [];
    let totalWeight = 0;
    let totalBrightness = 0;

    for (const color of colors) {
      const rgb = color.match(
        /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/i,
      );
      if (rgb) {
        const alpha = rgb[4] !== undefined ? Number(rgb[4]) : 1;
        if (alpha <= 0.05) continue;

        totalBrightness += this.brightness(Number(rgb[1]), Number(rgb[2]), Number(rgb[3])) * alpha;
        totalWeight += alpha;
        continue;
      }

      const hex = color.slice(1);
      const expanded = hex.length === 3 ? hex.split('').map((part) => part + part).join('') : hex;
      if (expanded.length < 6) continue;

      const red = parseInt(expanded.slice(0, 2), 16);
      const green = parseInt(expanded.slice(2, 4), 16);
      const blue = parseInt(expanded.slice(4, 6), 16);
      totalBrightness += this.brightness(red, green, blue);
      totalWeight += 1;
    }

    return totalWeight > 0 ? totalBrightness / totalWeight : null;
  }

  private brightness(red: number, green: number, blue: number): number {
    return (red * 299 + green * 587 + blue * 114) / 1000;
  }
}
