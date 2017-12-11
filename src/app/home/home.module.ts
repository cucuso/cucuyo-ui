import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './page/home.component';
import {MaterialModule} from '../material/material.module';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {SearchListComponent} from './components/search-list/search-list.component';
import {AppCommonsModule} from '../commons/app-commons.module';
import {SearchListItemComponent} from './components/search-list-item/search-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HomeRoutingModule,
    MaterialModule,
    AppCommonsModule
  ],
  declarations: [
    HomeComponent,
    SearchFormComponent,
    SearchListComponent,
    SearchListItemComponent
  ]
})
export class HomeModule {
}
