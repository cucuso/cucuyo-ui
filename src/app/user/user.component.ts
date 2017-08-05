import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MyHttpService } from '../shared/services/properties.service';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private service: MyHttpService) { }

  user: User = <User>{};

  public ngOnInit() { }




  onSubmit() {

    this.service.createUser(this.user).subscribe();

  }


}
