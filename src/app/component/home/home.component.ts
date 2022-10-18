import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';
import { UserService } from './../../services/user.service';
import { ShareFunctionsService } from './../../services/share-functions.service';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clickEventSubscription: Subscription;

  theChat: any[] = [];
  friends: any[] = [];
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
  friendData: any;
  chatItem = 'd-none';
  setting: any;
  settingStyle = 'd-none';
  searchStyle = 'd-none';
  message: any;
  id: any;
   audio= new Audio()


  constructor(
    private elem: ElementRef,
    private ShareFunctionsService: ShareFunctionsService,
    private UserService: UserService,
    private googleAuthService: SocialAuthService
  ) {
    this.clickEventSubscription =
      this.ShareFunctionsService.getClickEvent().subscribe(() => {
        this.allSetting();
      });
    this.ShareFunctionsService.signOut = this.logout;
  }

  ngOnInit(): void {
    this.audio.src='../../../assets/audio/ttn.mp3'

    this.getUserData();
    this.UserService.listen('resevMessage').subscribe((data: any) => {
      this.audio.play()
      this.theChat.push(data);
    });
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
      this.elem.nativeElement.style.setProperty(
        '--bgcolor',
        'rgb(240, 240, 240)'
      );
      this.elem.nativeElement.style.setProperty('--color', 'rgb(0 0 0)');
    }
  }

  openChat(i: any, id: any) {
    this.id = id;
    const data = {
      myId: this.userData._id,
      friendId: id,
    };
    this.UserService.getChat(data).subscribe((data: any) => {
      this.theChat = data.chat.messages;
    });
    this.UserService.getUserById(id).subscribe((data: any) => {
      this.friendData = data.user;
    });
    this.nameChat = this.friends[i].name;
    this.imgChat = this.friends[i].img;
    this.chat = '';
    this.searchStyle = 'd-none';
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
      this.userData = data.userData;
      this.getFriends();
      this.updateSocketId();
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

  allSetting() {
    if (this.chat == 'd-none' && this.searchStyle == '') {
      this.chat = '';
      this.searchStyle = 'd-none';
      this.friend = '';
    } else {
      this.chat = 'd-none';
      this.searchStyle = '';
      this.friend = 'friend';
    }
  }

  logout() {
    localStorage.clear();
    this.googleAuthService.signOut();
  }

  updateSocketId() {
    this.UserService.emit('updateSocketId', this.userData?._id);
  }

  getFriends() {
    for (let i = 0; i < this.userData.friends.length; i++) {
      const element = this.userData.friends[i];
      this.UserService.getUserById(element._id).subscribe((data: any) => {
        this.friends.push(data.user);
      });
    }
  }

  sendMessage() {
    const Data = {
      sendBy: this.userData._id,
      sendTo: this.id,
      content: this.message,
      date: new Date().toLocaleDateString('en'),
      time: new Date().toLocaleTimeString('en-US', {
        hour12: false,
      }),
    };
    this.UserService.emit('sendMessage', Data);
    this.message = '';
    this.theChat.push(Data);
    this.UserService.initChat(Data).subscribe((data: any) => {
    });
  }
}
