import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/shell'),
    children: [
      { path: '', loadComponent: () => import('./routes/home') },
      {
        path: 'products',
        loadComponent: () => import('./routes/products'),
      },
      {
        path: 'products/server',
        loadComponent: () => import('./routes/products/server'),
      },
      {
        path: 'products/router',
        loadComponent: () => import('./routes/products/router'),
      },
      {
        path: 'products/support',
        loadComponent: () => import('./routes/products/support'),
      },
      { path: 'about', loadComponent: () => import('./routes/about') },
      {
        path: 'contact',
        loadComponent: () => import('./routes/contact'),
      },
    ],
  },
  { path: '**', redirectTo: '' },
]
