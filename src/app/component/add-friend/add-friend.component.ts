import { ShareFunctionsService } from './../../services/share-functions.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent implements OnInit {
  name=''
  allUser: any = [];
  online :any
  userData:any
  constructor(private UserService: UserService, private ShareFunctionsService:ShareFunctionsService) {}

  ngOnInit(): void {
    this.getUserData()
    this.search()

    }
    getUserData() {
      this.ShareFunctionsService.getUserData().subscribe((data: any) => {
        this.userData = data.userData;

      });}

  search() {
    const data = {
      name: this.name,
      token: localStorage.getItem('token'),
    };

    if(data.name == ''){
this.allUser = []

    }else{
      this.UserService.searchUser(data).subscribe((data: any) => {
        const unique = [
          ...new Map(data.allUser.map((m: any) => [m._id, m])).values(),
        ];

        this.allUser = unique;
      });
    }

  }
  addFriend(id:any){

    const data={
id:id,
token: localStorage.getItem('token'),
}

this.UserService.addFriend(data).subscribe((data:any)=>{

})
  }

  backHome(){
    this.ShareFunctionsService.sendClickEvent()
      }
}
