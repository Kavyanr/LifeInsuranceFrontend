import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Policy } from '../model/policy';
import { User } from '../model/user';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  constructor(private httpUtil: HttpService, private router: Router, public snackBar: MatSnackBar){}
   
  retrievePolicy(): Observable<any> {
    let httpheaders = {
      headers:new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.httpUtil.getService(environment.policy_url + 'fetch', httpheaders);
  }

  updatePolicy(id,note): Observable<any>{
  var header = this.getHeader();
    return this.httpUtil.putServiceForPolicyUpdate(environment.policy_url + 'editpolicy/'+ JSON.stringify(id), note, header);
  
  }

  deletePolicy(policyId): Observable<any>
  {
    var httpheaders= this.getHeader();
    return this.httpUtil.deleteServiceForPolicyDelete(environment.policy_url + 'delete/'+ JSON.stringify(policyId),httpheaders);
}

public createPolicy(note: Policy): Observable<any> {
  var header = this.getHeader();
  return this.httpUtil.postServiceForPolicyCreate(environment.policy_url + 'addpolicy', note, header)
}
public getHeader() {
  var token = localStorage.getItem('token');
  
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
  return this.httpUtil.get(environment.policy_url + 'viewpolicy', header);

}


public buyPolicy(policy: Policy): Observable<any> {
  var token = localStorage.getItem('token');
  const httpheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    }),
    'responseType': 'text'
  };
   return this.httpUtil.buyPolicyPostService(environment.policy_url + 'buyPolicy', policy,httpheaders);
}
}
