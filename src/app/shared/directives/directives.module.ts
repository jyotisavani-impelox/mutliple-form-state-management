import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicCompanyViewDirective } from './dynamic-company-view.directive';



@NgModule({
  declarations: [
    DynamicCompanyViewDirective
  ],
  imports: [
    CommonModule
  ], exports: [
    DynamicCompanyViewDirective
  ]
})
export class DirectivesModule { }
