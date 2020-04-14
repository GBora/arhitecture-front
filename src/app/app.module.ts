import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { PubSubModule } from 'angular7-pubsub';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { UserService } from './services/user/user.service';
import { ConversationComponent } from './pages/friend-list-page/conversation.component';
import { FriendSearchComponent } from './pages/friend-search-page/friend-search/friend-search.component';
import { MessageThreadComponent } from './pages/friend-dialog-page/message-thread/message-thread.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { DialogUserAvatarComponent } from './dialog-user-avatar/dialog-user-avatar.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { FriendSearchPageComponent } from './pages/friend-search-page/friend-search-page.component';
import { FriendDialogPageComponent } from './pages/friend-dialog-page/friend-dialog-page.component';
import { HttpErrorInterceptor } from './helpers/httpErrorInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ConversationComponent,
    FriendSearchComponent,
    MessageThreadComponent,
    DialogMessageComponent,
    DialogUserAvatarComponent,
    DialogFormComponent,
    FriendSearchPageComponent,
    FriendDialogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbTypeaheadModule,
    PubSubModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [
  UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
