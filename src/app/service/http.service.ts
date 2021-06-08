import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private router: Router) {}

  postService(url: string, object: any):Observable<any>{
    return this.http.post<any>(url, object);
  }
  postLogin(url, object){
    return this.http.post<any>(url, object, {observe : 'response'});
  }
 
  putService(url,object,header){
    return this.http.put<any>(url,object, header);
  }

  getService(url,header) {
    return this.http.get<any>(url, header);
  }

  deleteService(url,header){
    return this.http.delete<any>(url, header);
  }

  postServiceForPolicyCreate(url,header,object):Observable<any>
  {
   return this.http.post<any>(url,header, object);
 }
 putServiceForPolicyUpdate(url,object, header): Observable<any>{
   return this.http.put<any>(url, object, header);
 }
 
 deleteServiceForPolicyDelete(url,header): Observable<any>{
   return this.http.delete<any>(url, header);
 }
 get(url,header){
  return this.http.get<any>(url,header);
}
buyPolicyPostService(url,object,header): Observable<any>{
 return this.http.post<any>(url,object,header);
}
getUser(url,header){
  return this.http.get<any>(url);
}
// getUser(url,header){
//   return this.http.get<any>(url);
// }
getPolicy(id: number): Observable<any> {
  return this.http.get(`${environment.policy_url}/policy/${id}`);
}

getEmployeesList(): Observable<any> {
  return this.http.get(`${environment.policy_url}/fetch`);
}

deleteEmployee(id: number): Observable<any> {
  return this.http.delete(`${environment.policy_url}/delete/${id}`, { responseType: 'text' });
}

updatePolicy(id: number, value: any): Observable<Object> {
  return this.http.put(`${environment.policy_url}/update/${id}`, value);
}

loggedIn(){
  return !!localStorage.getItem('token');
}

logOut(){
  localStorage.removeItem('token');
  this.router.navigate(['/welcome']);
}
}
