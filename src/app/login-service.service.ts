import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';
import { UserSpring } from './user-spring';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl:string="http://localhost:2810/login";
  private baseUrl1:string="http://localhost:2810/getUser";

  constructor(private httpClient:HttpClient) { }

  loginUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
  getUserData(userId:string):Observable<UserSpring>{
    return this.httpClient.get<UserSpring>(`${this.baseUrl1}/${userId}`);
  }
}
