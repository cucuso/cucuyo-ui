import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MyHttpService } from './shared/services/properties.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PropertyModule } from './property/property.module';
import { AddPropertyComponent } from './property/add/add-property.component';
import { UserModule } from './user/user.module';
import { SignUpComponent } from './user/signup.component';
import { PropertySearchComponent } from './property/search/property-search.component';

const appRoutes: Routes = [
  { path: 'users', component: SignUpComponent },
  { path: 'add', component: AddPropertyComponent },
  { path: 'search', component: PropertySearchComponent  },
  { path: '**', redirectTo: '/search', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule, PropertyModule, UserModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [MyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
