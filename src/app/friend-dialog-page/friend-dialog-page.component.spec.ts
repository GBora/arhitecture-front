import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendDialogPageComponent } from './friend-dialog-page.component';

describe('FriendDialogPageComponent', () => {
  let component: FriendDialogPageComponent;
  let fixture: ComponentFixture<FriendDialogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendDialogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendDialogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
