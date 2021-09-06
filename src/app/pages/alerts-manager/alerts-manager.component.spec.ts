import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsManagerComponent } from './alerts-manager.component';

describe('AlertsManagerComponent', () => {
  let component: AlertsManagerComponent;
  let fixture: ComponentFixture<AlertsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
