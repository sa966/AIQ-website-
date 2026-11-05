import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'AIQ — Africa’s first defence & intelligence focused AI company',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'products',
    title: 'Products — AIQ',
    loadComponent: () => import('./pages/products/products').then((m) => m.Products),
  },
  {
    path: 'geo-ai',
    title: 'GeoAI Tools — AIQ',
    loadComponent: () => import('./pages/geo-ai/geo-ai').then((m) => m.GeoAi),
  },
  {
    path: 'helix',
    title: 'Helix — Private messaging, built on trust',
    loadComponent: () => import('./pages/helix/helix').then((m) => m.Helix),
  },
  {
    path: 'company',
    title: 'Company — AIQ',
    loadComponent: () => import('./pages/company/company').then((m) => m.Company),
  },
  {
    path: 'careers',
    title: 'Careers — AIQ',
    loadComponent: () => import('./pages/careers/careers').then((m) => m.Careers),
  },
  {
    path: 'roles',
    title: 'Open Roles — AIQ',
    loadComponent: () => import('./pages/roles/roles').then((m) => m.Roles),
  },
  {
    path: 'roles/:slug',
    title: 'Role details — AIQ',
    loadComponent: () => import('./pages/roles/role-details').then((m) => m.RoleDetails),
  },
  {
    path: 'newsroom',
    title: 'Newsroom — AIQ',
    loadComponent: () => import('./pages/newsroom/newsroom').then((m) => m.Newsroom),
  },
  {
    path: 'faq',
    title: 'FAQ — AIQ',
    loadComponent: () => import('./pages/faq/faq').then((m) => m.Faq),
  },
  {
    path: 'contact',
    title: 'Contact — AIQ',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
