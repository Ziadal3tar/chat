import { ShareFunctionsService } from './../../services/share-functions.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent implements OnInit {
  userData: any;
  friends: any[] = [];
  constructor(
    private ShareFunctionsService: ShareFunctionsService,
    private UserService: UserService
  ) {}

  ngOnInit(): void {

    this.getUserData();
  }
  getUserData() {
    this.ShareFunctionsService.getUserData().subscribe((data: any) => {
      this.userData = data.userData;

      for (let i = 0; i < data.userData.friends.length; i++) {
        const element = data.userData.friends[i];
        this.UserService.getUserById(element._id).subscribe((data: any) => {
          this.friends.push(data.user);
        });
      }
    });
  }
  backHome(){
    this.ShareFunctionsService.sendClickEvent()

  }
}
