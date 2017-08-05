import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MyHttpService } from './shared/services/properties.service';
import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user/user.component'; 

const appRoutes: Routes = [
  { path: 'users', component: UserComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,  HttpModule, HttpClientModule, FormsModule,
     RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [MyHttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
