

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
// import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
// import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class UserService  {


  private baseUrl = 'http://localhost:3000';

  userData:any;


  constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.updateProduct();
  // }

  regester(user: any): any {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }
  googleRegester(data:any): any {
    this.userData = this.http.post(`${this.baseUrl}/googleRegester` , data );

    return this.http.post(`${this.baseUrl}/googleRegester` , data );
  }

  login(user: any) {
    this.userData = this.http.post(`${this.baseUrl}/signIn`, user);
    return this.http.post(`${this.baseUrl}/signIn`, user);
  }

  // getAllUser(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/allUser`);
  // }

  getUserData(data: any): any {
    return this.http.post(`${this.baseUrl}/getUserData`,data);
  }

  searchUser(data:any): any {
    return this.http.post(`${this.baseUrl}/searchUser`,data);
  }

  addFriend(data:any): any {
    return this.http.post(`${this.baseUrl}/addFriend`,data);
  }
  getUserById(id: any): any {
    return this.http.get(`${this.baseUrl}/getUserById/${id}`);
  }

  // deleteUser(id: any) {
  //   return this.http.delete(`${this.baseUrl}/deleteUser/${id}`);
  // }

  // updateUser(user: any, id: any) {
  //   return this.http.patch(`${this.baseUrl}/editUser/${id}`, user);
  // }



  // addpic(img: any) {
  //   return this.http.post(`${this.baseUrl}/addProfilePic`, img);
  // }

  // editProfilePic(formdata:any){
  //   return this.http.patch(`${this.baseUrl}/editProfilePic`, formdata);

  // }
}
