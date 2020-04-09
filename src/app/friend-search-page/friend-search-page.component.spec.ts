import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendSearchPageComponent } from './friend-search-page.component';

describe('FriendSearchPageComponent', () => {
  let component: FriendSearchPageComponent;
  let fixture: ComponentFixture<FriendSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
