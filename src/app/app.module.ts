import { TestComponent } from './component/test/test.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from 'ngx-wow';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { FriendsComponent } from './component/friends/friends.component';
import { FormsModule } from '@angular/forms';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { SettingComponent } from './component/setting/setting.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './component/search/search.component';
import { AllSettingComponent } from './component/all-setting/all-setting.component';
import { FriendComponent } from './component/friend/friend.component';
import { StarsComponent } from './component/stars/stars.component';
import { PlansComponent } from './component/plans/plans.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AddFriendComponent } from './component/add-friend/add-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    FriendsComponent,
    TestComponent,
    SettingComponent,
    SearchComponent,
    AllSettingComponent,
    FriendComponent,
    StarsComponent,
    PlansComponent,
    ProfileComponent,
    AddFriendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgwWowModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    CoolSocialLoginButtonsModule,
    NgbPaginationModule,
     NgbAlertModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '218751051600-ri3dm928lmqo48fhtabj97i6oogh76fo.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
