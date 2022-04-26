import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'notFound',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'createEstablishment',
    loadChildren: () =>
      import(
        './pages/establishment/create-establishment/create-establishment.module'
      ).then((m) => m.CreateEstablishmentModule),
  },
  {
    path: 'servicesList',
    loadChildren: () =>
      import('./pages/services/services-list/services-list.module').then(
        (m) => m.ServicesListModule
      ),
  },
  {
    path: 'createService',
    loadChildren: () =>
      import('./pages/services/create-service/create-service.module').then(
        (m) => m.CreateServiceModule
      ),
  },
  { path: 'establishmentList', loadChildren: () => import('./pages/establishment/establishment-list/establishment-list.module').then(m => m.EstablishmentListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
