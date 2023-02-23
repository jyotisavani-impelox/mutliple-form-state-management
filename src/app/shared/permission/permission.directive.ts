import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { PermissionService } from './permission.service';

@Directive({
  selector: '[hasPermission]',
})
export class PermissionDirective {
  private currentPermissions: Array<string> = [];

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private permissionService: PermissionService
  ) {
    this.permissionService.permissions$.pipe(distinctUntilChanged()).subscribe({
      next: (permissions) => {
        this.currentPermissions = permissions;
      },
    });
  }

  @Input() set hasPermission(hasPermission: Array<string>) {
    const permissions = hasPermission || [];
    if (permissions.length > 0) {
      this.checkPermissions(permissions);
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  checkPermissions(permissions: Array<string>) {
    if (this.currentPermissions.length === 0) {
      this.viewContainerRef.clear();
    } else {
      let hasAccess = permissions.some((r) =>
        this.permissionService.hasAccess(r)
      );
      return hasAccess
        ? this.viewContainerRef.createEmbeddedView(this.templateRef)
        : this.viewContainerRef.clear();
    }
  }
}
