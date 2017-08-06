import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MyHttpService } from '../shared/services/properties.service';
import { PropertySearchComponent } from './search/property-search.component';
import { CreatePropertyComponent } from './create/create-property.component';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PropertySearchComponent,
    CreatePropertyComponent
  ],
  exports:[PropertySearchComponent,CreatePropertyComponent],
  imports: [
    BrowserModule,  HttpModule, HttpClientModule, FormsModule,
  ],
  providers: [MyHttpService ]
})
export class PropertyModule { }
