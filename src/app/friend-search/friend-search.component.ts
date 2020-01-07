import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-friend-search',
  templateUrl: './friend-search.component.html',
  styleUrls: ['./friend-search.component.scss']
})
export class FriendSearchComponent implements OnInit {

  public model: any;
  private userService: UserService;
  @Output() newFriend = new EventEmitter();

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term: string) => {
        return this.userService.search(term);
      })
  )

  resultFormatBandListValue(value: any) {
    return value.firstName + ' ' + value.lastName + ' (' + value.email + ')';
  }

  add(selected: any) {
    this.newFriend.emit(selected.item);
  }

}
