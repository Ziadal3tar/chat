import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { Component, ElementRef } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chat';
  userData: any;
  mood = 'morning';
  morning = 'url(./assets/img/white-abstract-background_23-2148817571.jpg)';
  night = 'url(./assets/img/6222603.jpg)';
  constructor(
    private wowService: NgwWowService,
    private elem: ElementRef,
    private UserService: UserService,
    private Router: Router
  ) {
    this.wowService.init();
  }
  ngOnInit(): void {
   }
  google(user: any) {

    this.UserService.googleRegester(user).subscribe((data: any) => {

      if (data.Allow && data.message == 'Done signUp') {
        this.Router.navigate(['/login']);
        console.log('1');




      }else if(data.Allow && data.message == 'Done already exist and login'){
        console.log("2");
        localStorage.setItem('token', data.token);

        this.Router.navigate(['/home']);
      }else{
        console.log(data.message);

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

  getdata() {
    const token = localStorage.getItem('token');
    this.UserService.getUserData(token).subscribe((data: any) => {
      this.userData = data.userData;
      console.log(data);

      this.updateSocketId();
    });
  }

  updateSocketId() {
    this.UserService.emit('updateSocketId', this.userData?._id);
  }
}
