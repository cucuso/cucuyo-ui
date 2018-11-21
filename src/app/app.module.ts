import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MyHttpService } from './shared/services/properties.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AddPropertyComponent } from './property/add/add-property.component';
import { AccountManagementComponent } from './account/management/management.component';
import { LoginComponent } from './account/login/login.component';
import { PropertySearchComponent } from './property/search/property-search.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: 'account', component: AccountManagementComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: AddPropertyComponent },
  { path: 'search', component: PropertySearchComponent  },
  { path: '', component: LandingPageComponent, pathMatch: "full"},
  { path: '**',  redirectTo: '', component:LandingPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    AccountManagementComponent,
    LoginComponent,
    AddPropertyComponent,
    PropertySearchComponent
  ],
  exports:[NavbarComponent],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [MyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
