import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './page/home.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
