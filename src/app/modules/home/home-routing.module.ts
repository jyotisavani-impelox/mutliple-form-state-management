import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'step-one', pathMatch: 'full' },
      {
        path: 'step-one',
        component: StepOneComponent,
      },
      {
        path: 'step-two',
        component: StepTwoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
