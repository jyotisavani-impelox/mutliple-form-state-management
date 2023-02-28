import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  private permissions: Array<string> = [];
  public permissions$: BehaviorSubject<Array<string>> = new BehaviorSubject(
    [] as string[]
  );

  constructor() {}

  async initPermissions() {
    const permissions = await this.getPermissions();
    this.currentPermissions = permissions;
    return permissions;
  }

  hasAccess(permission: string) {
    return this.permissions.indexOf(permission) !== -1;
  }

  get currentPermissions() {
    return this.permissions;
  }

  set currentPermissions(permissions: Array<string>) {
    this.permissions$.next(permissions);
    this.permissions = permissions;
  }

  private getPermissions(): Promise<Array<string>> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve([
          'User.Add',
          'User.Edit',
          'User.View',
          'Customer.view',
          'Customer.edit',
        ]);
      }, 1500);
    });
  }
}
