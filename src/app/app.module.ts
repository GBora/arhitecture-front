import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user/user.service';
import { ConversationComponent } from './conversation/conversation.component';
import { FriendSearchComponent } from './friend-search/friend-search.component';
import { MessageThreadComponent } from './message-thread/message-thread.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { DialogUserAvatarComponent } from './dialog-user-avatar/dialog-user-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ConversationComponent,
    FriendSearchComponent,
    MessageThreadComponent,
    DialogMessageComponent,
    DialogUserAvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbTypeaheadModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
