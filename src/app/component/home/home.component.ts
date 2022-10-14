import { AppComponent } from './../../app.component';
import { UserService } from './../../services/user.service';
import { ShareFunctionsService } from './../../services/share-functions.service';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingComponent } from '../setting/setting.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clickEventSubscription:Subscription
  chats = [
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
    { message: 'loskjdfv vfkaj dvk asdn casn dvn D;c', from: 'me' },
    {
      message: 'jdfv sdcxaj dvkac ldnkl xsmx  asdn casn dvn D;c',
      from: 'other',
    },
  ];
  friends: any = [
    { name: 'ali', img: '../../../assets/img/5556.jpg' },
    {
      name: 'ahmed',
      img: '../../../assets/img/5556.jpg'    },
    {
      name: 'ziad',
      img: '../../../assets/img/5556.jpg'    },
    { name: 'doha', img: '../../../assets/img/low_poly_banner_design_1711.jpg' },
    {
      name: 'atef',
      img: '../../../assets/img/6222603.jpg'    },
  ];

  morning = 'url(./assets/img/white-abstract-background_23-2148817571.jpg)';
  night = 'url(./assets/img/6222603.jpg)';
  friendStyle = '';
  openIcon = '';
  data: any;
  sectionSubscribe: any;
  arabic = '';
  english = '';
  imgChat: any;
  nameChat: any;
  friend = '';
  chat = 'chat';
  cont: any;
  userData: any;
  chatItem = 'd-none';
  setting: any;
  settingStyle = 'd-none';
  searchStyle='d-none'
  constructor(
    private elem: ElementRef,
    private ShareFunctionsService: ShareFunctionsService,
    private UserService: UserService,
    private AppComponent: AppComponent
  ) {
    this.clickEventSubscription = this.ShareFunctionsService.getClickEvent().subscribe(()=>{
      this.allSetting()
    })
  }

  ngOnInit(): void {
    this.getUserData();

    this.data = this.ShareFunctionsService.getData();
    if (window.innerWidth >= 600) {
      this.cont = 'container';
    }

    if (this.data.lang == 'arabic') {
      this.english = 'd-none';
    } else {
      this.arabic = 'd-none';
    }
    if (this.data.mood == 'night') {
      this.elem.nativeElement.style.setProperty('--bg', this.night);
      this.elem.nativeElement.style.setProperty('--bgcolor', 'rgb(0 0 0)');
      this.elem.nativeElement.style.setProperty(
        '--color',
        'rgb(255, 255, 255)'
      );
    } else {
      this.elem.nativeElement.style.setProperty('--bg', this.morning);
      this.elem.nativeElement.style.setProperty('--bgcolor','rgb(240, 240, 240)');
      this.elem.nativeElement.style.setProperty('--color', 'rgb(0 0 0)');
    }
  }

  openChat(i: any) {
    this.nameChat = this.friends[i].name;
    this.imgChat = this.friends[i].img;

    this.chat = ''
    this.searchStyle ='d-none'
    this.friend = 'friend';
    this.chatItem = '';
  }
  closeChat() {
    this.friend = '';
    this.chat = 'chat';
    this.chatItem = 'd-none';
  }
  getUserData() {
    this.ShareFunctionsService.getUserData().subscribe((data: any) => {
      this.userData = data;
    });
  }
  Setting() {
    if (this.friend == 'friend') {
      this.friend = '';
      this.settingStyle = 'd-none';
    } else {
      this.friend = 'friend';
      this.settingStyle = '';
    }
  }
  allSetting(){

    if (this.chat == 'd-none' && this.searchStyle == '') {
      this.chat = 'd-none'
      this.searchStyle ='d-none'
      this.friend = '';

    }else{
    this.chat = 'd-none'
    this.searchStyle =''
    this.friend = 'friend';

  }}
}
