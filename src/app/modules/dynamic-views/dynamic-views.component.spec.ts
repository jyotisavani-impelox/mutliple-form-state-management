import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicViewsComponent } from './dynamic-views.component';

describe('DynamicViewsComponent', () => {
  let component: DynamicViewsComponent;
  let fixture: ComponentFixture<DynamicViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
