import { Optional } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/app/model/policy';

import { HttpService } from 'src/app/service/http.service';
import { PolicyService } from 'src/app/service/policy.service';

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.scss']
})
export class UpdatePolicyComponent implements OnInit {

  
  id: number;
  policy: Policy;
 form: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,
    private service: HttpService, private snackBar: MatSnackBar) { }
   
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getPolicy(this.id).subscribe((data: Policy)=>{
      this.policy = data;
    });
    
    this.form = new FormGroup({
      policyName: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      duration: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    });
   
  }

  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.service.updatePolicy(this.id, this.form.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('viewpolicy');
    })
  }
}
