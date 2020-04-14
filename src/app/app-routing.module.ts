import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ConversationComponent } from './pages/friend-list-page/conversation.component';
import { FriendSearchPageComponent } from './pages/friend-search-page/friend-search-page.component';
import { FriendDialogPageComponent } from './pages/friend-dialog-page/friend-dialog-page.component';

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
