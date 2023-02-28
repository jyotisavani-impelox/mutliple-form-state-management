import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
import { Companies } from 'src/app/shared/directives/dynamic-company-view.directive';

@Component({
  selector: 'app-dynamic-views',
  templateUrl: './dynamic-views.component.html',
  styleUrls: ['./dynamic-views.component.scss'],
})
export class DynamicViewsComponent implements OnInit, AfterViewInit {
  companies = Companies;
  selectedCompany = Companies.companyA;
  views!: {
    [key in Companies]?: TemplateRef<any>;
  };
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
