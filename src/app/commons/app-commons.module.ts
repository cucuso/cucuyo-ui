import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AdProperties} from './model/ad-properties.model';
import {AdPropertiesRepository} from './model/ad-properties-repository.service';
import {AdPropertiesSearch} from './model/ad-properties-search.model';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [AdProperties, AdPropertiesSearch, AdPropertiesRepository],
  declarations: []
})
export class AppCommonsModule {
}
