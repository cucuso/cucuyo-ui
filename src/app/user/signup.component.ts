import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MyHttpService } from '../shared/services/properties.service';
import { User } from '../shared/model/user';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

  constructor(private service: MyHttpService) { }

  user: User = <User>{};
  verifiedPassword = '';

  public ngOnInit() { }


  onSubmit() {
    this.service.createUser(this.user).subscribe();
  }

}
