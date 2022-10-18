import { ShareFunctionsService } from './../../services/share-functions.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
userData:any
  constructor(private ShareFunctionsService :ShareFunctionsService) { }

  ngOnInit(): void {
    this.getUserData()
  }
  getUserData() {
    this.ShareFunctionsService.getUserData().subscribe((data: any) => {
      this.userData = data.userData;
    });
  }

  backHome(){
    this.ShareFunctionsService.sendClickEvent()
      }
}
