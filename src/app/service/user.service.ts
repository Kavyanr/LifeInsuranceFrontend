import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpUtil: HttpService, private router: Router ) { }

  login(user) {
    return this.httpUtil.postLogin(environment.base_url + 'login', user);
  }

  register(user) {
   return this.httpUtil.postService(environment.base_url + 'register', user);
  }
  public getHeader() {
    var token = localStorage.getItem('token')
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token
      }),
      'responseType': 'text'
    };
    return httpheaders;
  }
  
  public getAll(): Observable<any> {
    var header = this.getHeader();
    return this.httpUtil.getUser(environment.policy_url + 'fetch', header);
  
  }
}
