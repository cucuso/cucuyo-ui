import { Component, OnInit } from '@angular/core';
import { PropertyService } from './shared/services/properties.service';
import { UserService } from './shared/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private propertyService: PropertyService, private userService: UserService) { }

  public ngOnInit() {
    // ADD WARMPUP OPTIONS CALL
    this.propertyService.warmUp().subscribe();
    this.userService.warmUp().subscribe();
  }
}
