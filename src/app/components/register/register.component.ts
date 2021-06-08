import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder,
              private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
     name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required]   
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit(user: String) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log(user);
    this.userService.register(user).subscribe((response: any) => {
      console.log(response);
     this.router.navigate(['/login']);
      // if (response.status === 200) {
      //   console.log(response.body.header);

      //   localStorage.setItem('Authorization', response.body.headers);
      // } else {
      //   console.log(response.body.headers);
      // }
    });

}
}