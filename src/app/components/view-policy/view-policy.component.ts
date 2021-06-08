import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Policy } from 'src/app/model/policy';
import { HttpService } from 'src/app/service/http.service';
import { PolicyService } from 'src/app/service/policy.service';
import { UpdatePolicyComponent } from '../update-policy/update-policy.component';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.scss']
})
export class ViewPolicyComponent implements OnInit {
  policies: Observable<Policy[]>;
 abc=false
  constructor(private service: HttpService, 
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.policies = this.service.getEmployeesList();
  }

 

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }

  getPolicy(id: number)  {
    this.router.navigate(['policyDetails', id]);
  }

}
