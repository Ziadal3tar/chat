import { ShareFunctionsService } from './../../services/share-functions.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-all-setting',
  templateUrl: './all-setting.component.html',
  styleUrls: ['./all-setting.component.scss'],
})
export class AllSettingComponent implements OnInit {
  constructor(
    private Router: Router,
    private googleAuthService: SocialAuthService,
    private ShareFunctionsService:ShareFunctionsService
  ) {}

  ngOnInit(): void {}

  backHome(){
    this.ShareFunctionsService.sendClickEvent()
      }


  logout() {
    this.googleAuthService.signOut();
    console.log(localStorage.getItem('token'));
    this.Router.navigate(['/login']);

    localStorage.removeItem('token');
  }
}
