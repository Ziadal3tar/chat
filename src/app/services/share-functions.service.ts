import { SignupComponent } from '../component/signup/signup.component';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',

})

export class ShareFunctionsService {
  mood :any
  data={
    mood:'morning',
    lang:'english'
  }
    constructor() { }


getData(){
  return this.data
}

  getmood(){
    return this.mood
  }
  changemood(){
    if (this.mood == "night") {
      this.mood = "morning"


    }else{
      this.mood = "night"


    }
  }
}
