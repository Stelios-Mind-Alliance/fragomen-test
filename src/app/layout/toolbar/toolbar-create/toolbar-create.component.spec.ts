import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarCreateComponent } from './toolbar-create.component';

describe('ToolbarCreateComponent', () => {
  let component: ToolbarCreateComponent;
  let fixture: ComponentFixture<ToolbarCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
