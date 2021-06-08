import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Policy } from 'src/app/model/policy';
import { HttpService } from 'src/app/service/http.service';
import { PolicyService } from 'src/app/service/policy.service';

@Component({
  selector: 'app-purchase-policy',
  templateUrl: './purchase-policy.component.html',
  styleUrls: ['./purchase-policy.component.scss']
})
export class PurchasePolicyComponent implements OnInit {

  policies: Policy[];
  id:number;
  policy: Policy;
submitted= false;

  constructor(private service: HttpService, private route: ActivatedRoute, private policyService: PolicyService,
    private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    
    this.service.getPolicy(this.id)
      .subscribe(data => {
        // console.log(data)
        this.policy = data;
      }, error => console.log(error));

  }
  buyPolicy(policies:Policy) {
     this.policyService.buyPolicy(policies);
    //.subscribe(response => {
    //   this.snackBar.open("success", "policy created", {
    //     duration: 2000
    //    } );
    //  console.log(response);
    //  // this.getNotes();
    // },
    //   (error) => {
    //     console.log('Error while creating policy:->', error);
    //   })

}
}