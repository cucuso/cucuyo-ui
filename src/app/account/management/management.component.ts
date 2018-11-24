import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'acct-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class AccountManagementComponent implements OnInit {

  constructor(private auth: AuthService, private service: UserService) { }

  userEmail;
  userObj = {properties:[]};

  public ngOnInit() {
    this.userEmail = this.auth.getEmail();

    this.service.getUserInfo(this.userEmail).subscribe(r => this.userObj = r);
  }

}
