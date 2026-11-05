import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROLES } from '../../site.config';
import { CharacterScrambleDirective } from '../../shared/directives/character-scramble.directive';

@Component({
  selector: 'app-roles',
  imports: [RouterLink, CharacterScrambleDirective],
  templateUrl: './roles.html',
  styleUrl: './roles.scss',
})
export class Roles {
  readonly roles = ROLES;

  readonly query = signal('');
  readonly department = signal('All Departments');
  readonly type = signal('All Types');

  readonly departments = ['All Departments', ...new Set(ROLES.map((role) => role.department))];
  readonly types = ['All Types', ...new Set(ROLES.map((role) => role.type))];

  readonly filtered = computed(() => {
    const term = this.query().trim().toLowerCase();
    const dept = this.department();
    const type = this.type();

    return this.roles.filter((role) => {
      const matchesTerm =
        !term ||
        `${role.title} ${role.department} ${role.location}`.toLowerCase().includes(term);
      const matchesDept = dept === 'All Departments' || role.department === dept;
      const matchesType = type === 'All Types' || role.type === type;
      return matchesTerm && matchesDept && matchesType;
    });
  });

  onQuery(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
  }

  onDepartment(event: Event) {
    this.department.set((event.target as HTMLSelectElement).value);
  }

  onType(event: Event) {
    this.type.set((event.target as HTMLSelectElement).value);
  }
}
