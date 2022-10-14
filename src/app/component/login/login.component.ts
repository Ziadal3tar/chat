import { AppComponent } from './../../app.component';
import { UserService } from './../../services/user.service';
import { ShareFunctionsService } from './../../services/share-functions.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hello: any;
  loginArabic = 'd-none';
  loginEnglish = 'd-none';
  dir: any;
  colorValue: any;
  mood = 'morning';
  emailOrPhone: any;
  password: any;
  passErr = '';
  emailErr = '';
  message: any;
  morning = 'url(./assets/img/white-abstract-background_23-2148817571.jpg)';
  night = 'url(./assets/img/6222603.jpg)';
  language = 'العربية';
  constructor(
    private ShareFunctionsService: ShareFunctionsService,
    private elem: ElementRef,
    private UserService: UserService,
    private Router: Router,
    private AppComponent: AppComponent,
    private googleAuthService: SocialAuthService
  ) {
    this.ShareFunctionsService.signOut = this.signOut;
    // this.colorValue = 'yellow';
  }

  ngOnInit(): void {
    this.elem.nativeElement.style.setProperty('--bg', this.morning);
    this.elem.nativeElement.style.setProperty('--bgline', 'rgb(0 0 0 / 20%)');

    if (this.language == 'العربية') {
      setTimeout(() => {
        this.hello = 'opacity-0 transition';
        setTimeout(() => {
          this.hello = 'd-none';

          setTimeout(() => {
            this.loginEnglish = 'opacity-0 ';

            setTimeout(() => {
              this.loginEnglish = 'opacity-100 transition  ';
            }, 100);
          }, 10);
        }, 501);
      }, 2000);
    } else {
      setTimeout(() => {
        this.hello = 'opacity-0 transition';
        setTimeout(() => {
          this.hello = 'd-none';

          setTimeout(() => {
            this.loginArabic = 'opacity-0 ';
            setTimeout(() => {
              this.loginArabic = 'opacity-100 transition  ';
            }, 100);
          }, 10);
        }, 501);
      }, 2000);
    }

    this.googleAuthService.authState.subscribe((user) => {
      this.AppComponent.google(user);
    });
  }

  login() {
    const user = {
      emailOrPhone: this.emailOrPhone,
      password: this.password,
    };

    this.UserService.login(user).subscribe((data: any) => {
      if (data.emailErr) {
        this.passErr = '';

        this.emailErr = data.emailErr;
      } else if (data.passErr) {
        this.emailErr = '';

        this.passErr = data.passErr;
      } else if (data.message == 'error') {
        console.log(
          data.validationError[0][0].message.split('"').join('').split(' ')[0]
        );
        if (
          data.validationError[0][0].message
            .split('"')
            .join('')
            .split(' ')[0] == 'emailOrPhone'
        ) {
          this.passErr = '';
          this.emailErr = data.validationError[0][0].message
            .split('"')
            .join('');
        } else if (
          data.validationError[0][0].message
            .split('"')
            .join('')
            .split(' ')[0] == 'password'
        ) {
          this.emailErr = '';

          this.passErr = data.validationError[0][0].message.split('"').join('');
        }
      } else {
        this.emailErr = '';
        this.passErr = '';
        this.message = 'welcome';
        this.Router.navigate(['/home']);
      }
    });
  }

  changeMood() {
    if (this.mood == 'night') {
      this.mood = 'morning';
      this.elem.nativeElement.style.setProperty('--bg', this.morning);
      this.elem.nativeElement.style.setProperty('--bgline', 'rgb(0 0 0 / 20%)');
    } else {
      this.mood = 'night';
      this.elem.nativeElement.style.setProperty('--bg', this.night);
      this.elem.nativeElement.style.setProperty(
        '--bgline',
        'rgb(255, 255, 255)'
      );
    }
  }
  changeLang() {
    if (this.loginArabic == 'd-none') {
      this.loginArabic = '';
      this.language = 'English';
      this.dir = 'rtl';
      this.loginEnglish = 'd-none';
    } else {
      this.loginArabic = 'd-none';
      this.language = 'العربية';
      this.dir = 'ltr';

      this.loginEnglish = '';
    }
  }
  signOut(): void {
    this.googleAuthService.signOut();
    console.log(localStorage.getItem('token'));
    localStorage.removeItem('token');
    this.Router.navigate(['/login']);
  }
}
