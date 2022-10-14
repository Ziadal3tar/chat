import { ShareFunctionsService } from './../../services/share-functions.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private ShareFunctionsService :ShareFunctionsService) { }

  ngOnInit(): void {
  }
  backHome(){
    this.ShareFunctionsService.sendClickEvent()
      }
}
