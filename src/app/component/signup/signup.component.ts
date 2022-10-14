import { AppComponent } from './../../app.component'
import { UserService } from './../../services/user.service'
import { Component, ElementRef, OnInit,AfterViewInit } from '@angular/core'
import { Router } from '@angular/router'
import jwt_decode from 'jwt-decode'
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login'
 declare var google:any


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit  {
  hello=""
  loginArabic="d-none"
  loginEnglish="d-none"
  dir:any
  colorValue:any
  morning="url(./assets/img/white-abstract-background_23-2148817571.jpg)"
  night="url(./assets/img/6222603.jpg)"
  mood = "morning"
  language = "العربية"

  userName:any
  email:any
  phone:any
  password:any
  confirmPassword:any
  constructor(
    private elem: ElementRef,
    private UserService:UserService,
    private Router:Router,
    private googleAuthService: SocialAuthService,
    private AppComponent:AppComponent
    ) {

}


  ngOnInit(): void {


    // this.elem.nativeElement.style.setProperty('--bg', this.morning);
    // this.elem.nativeElement.style.setProperty('--bgline','rgb(0 0 0 / 20%)' );

    if (this.language == "العربية") {
      setTimeout(() => {
        this.hello = "opacity-0 transition"
        setTimeout(() => {
          this.hello = "d-none"


          setTimeout(() => {
            this.loginEnglish = "opacity-0 "

            setTimeout(() => {
              this.loginEnglish = "opacity-100 transition  "

            }, 100)
          }, 10)

        }, 501)
      }, 2000)

    }else{
      setTimeout(() => {
        this.hello = "opacity-0 transition"
        setTimeout(() => {
          this.hello = "d-none"


          setTimeout(() => {
            this.loginArabic = "opacity-0 "
            setTimeout(() => {
              this.loginArabic = "opacity-100 transition  "

            }, 100)
          }, 10)

        }, 501)
      }, 2000)
    }
    this.googleAuthService.authState.subscribe((user) => {

      this.AppComponent.google(user)
  })


  }







  regester(){
    const user = {
userName: this.userName,
email:this.email,
phone:this.phone,
password:this.password
    }
    console.log(user)
    this.UserService.regester(user).subscribe((data:any)=>{
      console.log(data)
      this.Router.navigate(['/login'])

    })

  }



  changeMood(){
    if (this.mood == "night") {
      this.mood = "morning"
      this.elem.nativeElement.style.setProperty('--bg', this.morning)
      this.elem.nativeElement.style.setProperty('--bgline','rgb(0 0 0 / 20%)' )

    }else{
      this.mood = "night"
      this.elem.nativeElement.style.setProperty('--bg', this.night)
      this.elem.nativeElement.style.setProperty('--bgline','rgb(255, 255, 255)' )

    }

      }
      changeLang(){
        if (this.loginArabic == "d-none") {
          this.loginArabic = ""
          this.language = "English"
          this.dir = "rtl"
          this.loginEnglish ="d-none"

        }else{
          this.loginArabic = "d-none"
          this.language = "العربية"
          this.dir = "ltr"

          this.loginEnglish =""
        }
      }

}
