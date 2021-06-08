import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  hide = true;
  id:string;
  email: string;
  password:string;
 
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
 
  }
  get f() { return this.loginForm.controls; } 

 onSubmit(user: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log('invalid');
    }
    console.log(user);
    this.userService.login(user).subscribe((response) => {
      localStorage.setItem('token', response.headers.get('token'));
      console.log('login successfull');
      this.router.navigate(['/homePage']);
    },
    (error) => {
      console.log('Couldnt log in');

    });
    }

  

}
