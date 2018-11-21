import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../shared/services/properties.service';
import { User } from '../../shared/model/user';

@Component({
  selector: 'sign-up',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private service: MyHttpService) { }

  user: User = <User>{};
  isUserCreated:boolean;
  selectedTab = "signup";
  token;

  public ngOnInit() { 
    
    this.token = localStorage.getItem("token");

  }

  onSubmit() {
    this.service.createUser(this.user).subscribe(r=> {
      
      if(r == "success"){
        this.isUserCreated = true;
        localStorage.setItem("token","TEST TOKEN");
      }
      
      console.log(r)
    
    
    });
  }

}
