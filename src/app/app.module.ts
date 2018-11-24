import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AddPropertyComponent } from './property/add/add-property.component';
import { AccountManagementComponent } from './account/management/management.component';
import { LoginComponent } from './account/login/login.component';
import { PropertySearchComponent } from './property/search/property-search.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { PropertyService } from './shared/services/properties.service';
import { UserService } from './shared/services/user.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => localStorage.getItem('token')),
    noClientCheck: true,
    globalHeaders: [{ 'Content-Type': 'application/json' }],
  }), http, options);
}

const appRoutes: Routes = [
  { path: 'account', component: AccountManagementComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: AddPropertyComponent, canActivate: [AuthGuard] },
  { path: 'search', component: PropertySearchComponent },
  { path: '', component: LandingPageComponent, pathMatch: "full" },
  { path: '**', redirectTo: '', component: LandingPageComponent }
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
  exports: [NavbarComponent],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [PropertyService,
    UserService,
    AuthGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
