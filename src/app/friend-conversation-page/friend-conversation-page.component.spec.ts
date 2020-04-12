import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendConversationPageComponent } from './friend-conversation-page.component';

describe('FriendConversationPageComponent', () => {
  let component: FriendConversationPageComponent;
  let fixture: ComponentFixture<FriendConversationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendConversationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendConversationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
