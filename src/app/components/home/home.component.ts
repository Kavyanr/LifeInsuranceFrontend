import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser:User;
  abc = false;
  def = false;
  constructor(private router: Router, public httpService: HttpService) { }

  ngOnInit() {

  }
 navigateNotes(){
  this.router.navigate(['viewpolicy']);
 }
 navigateTrash(){
   this.router.navigate(['trash']);
 }
 navigateUpdate(){
   this.router.navigate(['update']);
 }
}
