import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MyHttpService } from '../../shared/services/properties.service';


@Component({
  selector: 'create-property',
  templateUrl: './create-property.component.html'
})
export class CreatePropertyComponent implements OnInit {

  constructor(private service: MyHttpService) { }



  public ngOnInit() { }


  onSubmit() {
    this.service.createUser(null).subscribe();
  }

}
