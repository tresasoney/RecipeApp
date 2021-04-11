import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  adduser(data: any) {
    return this.http.post<any>('http://localhost:7000/register', { "user": data });
  };
  loginvalidate(data: any) {
    return this.http.post<any>('http://localhost:7000/login', { "user": data });
  };
  loggedIn(){
    return !!localStorage.getItem("loggedin");
  }
  removeToken(){
    localStorage.removeItem("loggedin");
  }
}
