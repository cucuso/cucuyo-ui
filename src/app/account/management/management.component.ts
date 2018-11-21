import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../shared/services/properties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class AccountManagementComponent implements OnInit {

  constructor(private service: MyHttpService, private router: Router) { }

  token;

  public ngOnInit() {
    this.token = localStorage.getItem("token");

    if(this.token == null) {
      this.router.navigate(['/login']);
    }
   }

}
