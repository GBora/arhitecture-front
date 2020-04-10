import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ConversationComponent } from './conversation/conversation.component';
import { FriendSearchPageComponent } from './friend-search-page/friend-search-page.component';
import { FriendDialogPageComponent } from './friend-dialog-page/friend-dialog-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'friends-list', component: ConversationComponent },
  { path: 'friends-search', component: FriendSearchPageComponent },
  { path: 'friend-dialog/:email', component: FriendDialogPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
