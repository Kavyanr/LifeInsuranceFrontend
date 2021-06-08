import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/app/model/policy';
import { HttpService } from 'src/app/service/http.service';
import { PolicyService } from 'src/app/service/policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  abc=false;
  def=false;
  public showHeader = true;
  createPolicyForm: FormGroup;
  loading = false;
  submitted = false;
 // public mytoken = localStorage.getItem('token')
  public notes: Policy[] = [];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private noteService: PolicyService,
    private httpUtil: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getNotes();
    this.createPolicyForm = this.formBuilder.group({
      policyName: [''],
      description: [''],
      duration: [''],
      price: ['']
    });
  }
  navigateNotes(){
    this.router.navigate(['addpolicy']);
   }
   navigateTrash(){
     this.router.navigate(['trash']);
   }
   navigateUpdate(){
     this.router.navigate(['update']);
   }

  get f() { return this.createPolicyForm.controls; }
  
  getNotes() {
   // console.log("token", this.mytoken);
    this.noteService.retrievePolicy().subscribe(newNote => {
      this.notes = newNote;
    }
    )
  }
  onSubmit(note) {
    this.submitted = true;

    if (this.createPolicyForm.invalid) {
      return;
    }
    if (this.createPolicyForm.value.title === "" && this.createPolicyForm.value.description === "" ) {
      return;
    }
   // console.log(this.mytoken);
    // console.log(notes);
    this.noteService.createPolicy(note).subscribe(response => {
      this.snackBar.open("success", "policy created", {
        duration: 2000
       } );
     console.log(response);
      this.getNotes();
    },
      (error) => {
        console.log('Error while creating policy:->', error);
      })
    }
}
