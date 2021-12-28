import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = "http://localhost:3000/api/users";
  constructor(private httpClient: HttpClient) { }

  sendRequestToGetAllUsers() {
    return this.httpClient.get(this.userURL);
  }

  sendRequestToDeleteUser(id) {
    console.log('Here user into service', id);
    return this.httpClient.delete(`${this.userURL}/${id}`);
  }

  sendRequestToSignup(user) {
    return this.httpClient.post<{ code: string }>(`${this.userURL}/signup`, user);
  }

  sendRequestToLogin(user) {
    return this.httpClient.post<{ message: string, user: any }>(`${this.userURL}/login`, user)
  }

}