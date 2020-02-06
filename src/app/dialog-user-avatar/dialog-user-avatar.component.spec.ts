import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserAvatarComponent } from './dialog-user-avatar.component';

describe('DialogUserAvatarComponent', () => {
  let component: DialogUserAvatarComponent;
  let fixture: ComponentFixture<DialogUserAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUserAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUserAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
