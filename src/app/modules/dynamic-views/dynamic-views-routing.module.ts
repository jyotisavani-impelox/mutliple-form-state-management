import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DynamicViewsComponent } from './dynamic-views.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicViewsComponent,
  },
  {
    path: 'change-detection',
    component: ChangeDetectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicViewsRoutingModule {}
