import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

import { Policy } from 'src/app/model/policy';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';
import { PolicyService } from 'src/app/service/policy.service';
import { UpdatePolicyComponent } from '../update-policy/update-policy.component';

@Component({
  selector: 'app-buy-policy',
  templateUrl: './buy-policy.component.html',
  styleUrls: ['./buy-policy.component.scss']
})
export class BuyPolicyComponent implements OnInit {

  policies: Observable<Policy[]>;
  id:number;
abc=false;
submitted= false;
  constructor(public service: HttpService, private route: ActivatedRoute, private policyService: PolicyService,
    private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.reloadData();
  }

  reloadData() {
    this.policies = this.service.getEmployeesList();
  }
  
  // buyPolicy(policy: Policy){
  //   this.router.navigate(['policyDetails', policy]);
  // }

  getPolicy(id: number)  {
    this.router.navigate(['purchase', id]);
  }
  buyPolicy(policy:Policy) {
    this.policyService.buyPolicy(policy).subscribe(response => {
      this.snackBar.open("success", "policy added", {
        duration: 2000
       } );
     console.log(response);
     // this.getNotes();
    },
      (error) => {
        console.log('Error while creating policy:->', error);
      })

    }
}
