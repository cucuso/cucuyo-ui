import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
