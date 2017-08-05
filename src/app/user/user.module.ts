import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { MyHttpService } from '../shared/services/properties.service';
 

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule,  HttpModule, HttpClientModule, FormsModule
  ],
  providers: [MyHttpService ]
})
export class UserModule { }
