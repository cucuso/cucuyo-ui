import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/model/user';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'sign-up',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService) { }

  user: User = <User>{};
  isUserCreated: boolean;
  selectedTab = "signup";
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  public ngOnInit() {}

  onSubmit() {

    this.service.createUser(Object.assign({}, this.user)).subscribe(r => {

      this.isUserCreated = true;
      localStorage.setItem("token", r.token);

      this.navbar.refresh();
    });
  }

  login() {

    this.service.login(Object.assign({}, this.user)).subscribe(r => {
      
      this.isUserCreated = true;
      localStorage.setItem("token", r.token);

      this.navbar.refresh();
    });
  }

}
