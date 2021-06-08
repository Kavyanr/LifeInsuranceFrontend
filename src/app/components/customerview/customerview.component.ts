import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.scss']
})
export class CustomerviewComponent implements OnInit {

  abc=false;
def=false;
  public mytoken: any;
  public user: User[] = [];
  constructor(private service: UserService, private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.mytoken = localStorage.getItem('token');
    this.getUser();
  }
getUser(){
  console.log("token", this.mytoken);
  this.service.getAll().subscribe(newPolicy => {
    this.user = newPolicy;
  })
}



}
