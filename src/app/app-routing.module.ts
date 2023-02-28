import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionResolver } from './shared/permission/permission.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { permision: PermissionResolver },
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'dynamic-views',
    loadChildren: () =>
      import('./modules/dynamic-views/dynamic-views.module').then((m) => m.DynamicViewsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
