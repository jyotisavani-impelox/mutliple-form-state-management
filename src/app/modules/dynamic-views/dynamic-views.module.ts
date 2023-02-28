import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicViewsComponent } from './dynamic-views.component';
import { DynamicViewsRoutingModule } from './dynamic-views-routing.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
  declarations: [DynamicViewsComponent],
  imports: [CommonModule, DynamicViewsRoutingModule, DirectivesModule],
})
export class DynamicViewsModule {}
