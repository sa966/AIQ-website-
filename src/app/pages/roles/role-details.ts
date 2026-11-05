import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { BRAND, ROLES } from '../../site.config';

@Component({
  selector: 'app-role-details',
  imports: [RouterLink],
  templateUrl: './role-details.html',
  styleUrl: './role-details.scss',
})
export class RoleDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug'))),
    { initialValue: this.route.snapshot.paramMap.get('slug') },
  );

  readonly brand = BRAND;
  readonly role = computed(() => ROLES.find((item) => item.slug === this.slug()) ?? null);
  readonly applicationHref = computed(() => {
    const role = this.role();
    if (!role) {
      return null;
    }

    const subject = encodeURIComponent(`Application: ${role.title}`);
    const body = encodeURIComponent(`Hello, I'm interested in the ${role.title} role.`);
    return `mailto:${BRAND.careersEmail}?subject=${subject}&body=${body}`;
  });
}
