import {
  AfterViewInit,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
export enum Companies {
  companyA = 'Company A',
  companyB = 'Company B',
  companyC = 'Company C',
}

@Directive({
  selector: '[dynamicCompanyView]',
})
export class DynamicCompanyViewDirective implements AfterViewInit {
  @Input() views!: {
    [key in Companies]?: TemplateRef<any>;
  };

  @Input() selectedCompany!: Companies;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit(): void {
    if (!this.selectedCompany) {
      if (this.views[Companies.companyA]) {
        this.viewContainerRef.createEmbeddedView(
          this.views[Companies.companyA]
        );
      }

      if (this.views[Companies.companyB]) {
        this.viewContainerRef.createEmbeddedView(
          this.views[Companies.companyB]
        );
      }
    } else {
      switch (this.selectedCompany) {
        case Companies.companyA:
          if (this.views[Companies.companyA]) {
            this.viewContainerRef.createEmbeddedView(
              this.views[Companies.companyA]
            );
          }
          break;

        case Companies.companyC:
          if (this.views[Companies.companyC]) {
            this.viewContainerRef.createEmbeddedView(
              this.views[Companies.companyC]
            );
          }
          break;

        default:
          break;
      }
    }
  }
}
