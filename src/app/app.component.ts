import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MyHttpService } from './shared/services/properties.service';
import { SearchDto } from './shared/model/search-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  root = true;

  constructor(router: Router) {
    router.events.subscribe(
      (url:any)=>{
          console.log(url.url);
          if(url.url!== '/')
            this.root= false;
          
    });

  }
  title = 'app';


  public ngOnInit() {

  }
}
