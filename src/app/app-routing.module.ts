import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent} from './register-page/register.component';
import {LoginComponent} from './login-page/login.component';
import {HomeComponent} from './home-page/home.component';
import {ProfileComponent} from './profile-page/profile.component';
import {UserPageComponent} from './user-page/user-page.component';
import {TokenComponent} from './register-page/token.component';
import {ServicesListComponent} from './services-page/list.component';
import {ServicesViewComponent} from './services-page/view.component';
import {ServicesAddEditComponent} from './services-page/add-edit.component';
import {BoardModeratorComponent} from './moderator-page/board-moderator.component';
import {CardComponent} from './card/card.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'verify', component: TokenComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'pay', component: CardComponent},
  {path: 'services', redirectTo: 'services/list', pathMatch: 'full'},
  {path: 'services/list', component: ServicesListComponent},
  {path: 'services/:id/view', component: ServicesViewComponent},
  {path: 'services/add', component: ServicesAddEditComponent},
  {path: 'services/:id/edit', component: ServicesAddEditComponent},
  {path: '', redirectTo: 'home-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
