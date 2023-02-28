import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent implements OnInit, OnDestroy {
  public shouldDetectChanges = false;
  public showView = false;

  public users = [
    {
      id: 1,
      name: 'User 1',
    },
  ];
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.shouldDetectChanges = true;
    setTimeout(() => {
      this.showView = true;
      this.detectChanges();
    }, 3000);
  }

  ngOnDestroy(): void {
    this.shouldDetectChanges = false;
  }

  addUser() {
    const id = this.users.length + 1;
    this.users.push({
      id,
      name: 'User ' + id,
    });
    // this.detectChanges();
  }

  detectChanges() {
    if (this.shouldDetectChanges) {
      this.cdRef.detectChanges();
    }
  }
}
