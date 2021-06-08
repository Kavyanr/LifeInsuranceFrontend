import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  hide = true;

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
    this.userService.login(user).subscribe((response:any) => {
      console.log(response);

      console.log('login successfull');
      localStorage.setItem('token', response.headers.get('token'));
      
      this.router.navigate(['/home']);

    },
    (error) => {
      console.log('Couldnt log in');

    });
  }
register()
{
  this.router.navigate['/registration'];
}
}
