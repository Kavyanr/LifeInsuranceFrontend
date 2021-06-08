import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/app/model/policy';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss']
})
export class PolicyListComponent implements OnInit {
  abc = false;
  id: number;
  policy: Policy;

  constructor(private route: ActivatedRoute,private router: Router,
    private service: HttpService) { }

  ngOnInit() {
  

    this.id = this.route.snapshot.params['id'];
    
    this.service.getPolicy(this.id)
      .subscribe(data => {
        console.log(data)
        this.policy = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/viewpolicy']);
  }

}
