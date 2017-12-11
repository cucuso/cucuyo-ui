import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdProperties} from "../../../commons/model/ad-properties.model";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchFormComponent {

  isLoading = false;
  isAdvancedSearchEnabled = false;
  @Output() whenSearchEnds: EventEmitter<Array<AdProperties>> = new EventEmitter<Array<AdProperties>>();
  searchForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      'criteria': '',
      'from': '',
      'to': ''
    });
  }

  submit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      const ad = new AdProperties();
      ad.title = 'Se vende casa en Brisas del Mar a 150 mtrs de la playa.';
      ad.avatarUrl = 'http://localhost:4200/assets/images/home-avatar.jpg';
      ad.price = 90000;
      this.whenSearchEnds.emit([ad, ad, ad, ad, ad]);
    }, 1000);
  }
}
