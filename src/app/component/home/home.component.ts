import { ShareFunctionsService } from './../../services/share-functions.service';
import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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


  friends:any= [
    {name:'ali', img:'../../../assets/img/5556.jpg'},
    {name:'ahmed', img:'../../../assets/img/WhatsApp Image 2022-09-14 at 6.12.54 PM.jpeg'},
    {name:'ziad', img:'../../../assets/img/WhatsApp Image 2022-09-14 at 6.12.54 PM.jpeg'},
    {name:'doha', img:'../../../assets/img/6222603.jpg'},
    {name:'atef', img:'../../../assets/img/WhatsApp Image 2022-09-14 at 6.12.54 PM.jpeg'}

  ]
  morning = 'url(./assets/img/white-abstract-background_23-2148817571.jpg)';
  night = 'url(./assets/img/6222603.jpg)';
  friendStyle = '';
  openIcon = '';
  data: any;
  // x = this.chats.length;
  sectionSubscribe: any;
  arabic = '';
  english = '';
  imgChat:any
  nameChat:any
friend:any
chat='chat'
cont:any
  constructor(
    private elem: ElementRef,
    private ShareFunctionsService: ShareFunctionsService
  ) {}

  ngOnInit(): void {
    this.data = this.ShareFunctionsService.getData();
    if (window.innerWidth >= 600) {
      this.cont = 'container'
    }



// if(this.data.lang == "arabic"){
//   this.openIcon = 'fa-circle-left';

// }else{
//   this.openIcon = 'fa-circle-right';
// }
    if (window.innerWidth <= 992) {
      this.friendStyle = 'close';
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
  // open() {

  //   if (this.friendStyle == 'open' ) {
  //     this.friendStyle = 'close';
  //     this.openIcon = 'fa-circle-left';
  //   } else {
  //     this.friendStyle = 'open';
  //     this.openIcon = 'fa-circle-right';
  //   }
  // }



  openChat(i:any){
this.nameChat = this.friends[i].name
this.friend ="friend"
this.chat = ''

  }
  closeChat(){
    this.friend =""
this.chat = 'chat'
  }
}
