// filepath: /c:/Users/War/Desktop/AplicacionJuegos/juegos/src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then(m => m.RegistroPage)
  },
  {
    path: 'seleccion-juegos',
    loadComponent: () => import('./seleccion-juegos/seleccion-juegos.page').then(m => m.SeleccionJuegosPage)
  },
];