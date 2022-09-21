import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hello:any
  loginArabic="d-none"
  loginEnglish=""

  colorValue:any
  morning="url(../../assets/img/white-abstract-background_23-2148817571.jpg)"
  night="url(../../assets/img/6222603.jpg)"
  mood = "morning"
  language = "العربية"
  constructor(private elem: ElementRef) {
    this.colorValue = "yellow";
   }

  ngOnInit(): void {
    this.elem.nativeElement.style.setProperty('--bg', this.morning);
    this.elem.nativeElement.style.setProperty('--bgline','rgb(0 0 0 / 20%)' );


    // setTimeout(() => {
    //   this.hello = "opacity-0 transition"
    //   setTimeout(() => {
    //     this.hello = "d-none"


    //     setTimeout(() => {
    //       this.login = "opacity-0 "
    //       setTimeout(() => {
    //         this.login = "opacity-100 transition  "

    //       }, 100);
    //     }, 10);

    //   }, 501);
    // }, 2000);
  }


  toNight(){
if (this.mood == "night") {
  this.mood = "morning"
  this.elem.nativeElement.style.setProperty('--bg', this.morning);
  this.elem.nativeElement.style.setProperty('--bgline','rgb(0 0 0 / 20%)' );

}else{
  this.mood = "night"
  this.elem.nativeElement.style.setProperty('--bg', this.night);
  this.elem.nativeElement.style.setProperty('--bgline','rgb(255, 255, 255)' );

}

  }
  changeLang(){
    if (this.loginArabic == "d-none") {
      this.loginArabic = ""
      this.language = "English"

      this.loginEnglish ="d-none"

    }else{
      this.loginArabic = "d-none"
      this.language = "العربية"

      this.loginEnglish =""
    }
  }
}
