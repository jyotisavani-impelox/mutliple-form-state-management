import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { from, Observable } from 'rxjs';
import { PermissionService } from './permission.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionResolver implements Resolve<boolean> {
  constructor(private permissionService: PermissionService) {}
  resolve(): Observable<any> {
    return from(this.permissionService.initPermissions());
  }
}
