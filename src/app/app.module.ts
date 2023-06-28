
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login-page/login.component';
import { RegisterComponent } from './register-page/register.component';
import { HomeComponent } from './home-page/home.component';
import { ProfileComponent } from './profile-page/profile.component';
import { UserPageComponent } from './user-page/user-page.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { TokenComponent } from './register-page/token.component';
import {ServicesListComponent} from './services-page/list.component';
import {ServicesViewComponent} from './services-page/view.component';
import {ServicesAddEditComponent} from './services-page/add-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BoardModeratorComponent} from './moderator-page/board-moderator.component';
import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    UserPageComponent,
    TokenComponent,
    ServicesListComponent,
    ServicesViewComponent,
    ServicesAddEditComponent,
    BoardModeratorComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatInputModule,
    MomentDateModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
