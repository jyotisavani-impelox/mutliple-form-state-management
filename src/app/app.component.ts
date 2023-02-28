import { Component, OnInit } from '@angular/core';
import { PermissionService } from './shared/permission/permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private permissionService: PermissionService) {}

  async ngOnInit(): Promise<void> {
    // await this.permissionService.initPermissions();
  }
}
