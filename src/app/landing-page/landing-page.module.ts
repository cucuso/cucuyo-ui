import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        LandingPageComponent
      ],
      imports: [FormsModule],
    exports:[LandingPageComponent]
})
export class LandingPageModule { }
