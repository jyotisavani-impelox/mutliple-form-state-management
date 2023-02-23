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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
