import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MyHttpService } from '../shared/services/properties.service';
import { PropertySearchComponent } from './search/property-search.component';
import { AddPropertyComponent } from './add/add-property.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    PropertySearchComponent,
    AddPropertyComponent
  ],
  exports: [PropertySearchComponent, AddPropertyComponent],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule, FileUploadModule
  ],
  providers: [MyHttpService]
})
export class PropertyModule { }
