import {Component, ViewEncapsulation} from '@angular/core';
import {AdProperties} from '../../commons/model/ad-properties.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  isSearchFormSubmitted = false;
  items: Array<AdProperties> = [];

  constructor() {
  }

  renderSearchResults(searchResults: Array<AdProperties>) {
    this.isSearchFormSubmitted = true;
    this.items = searchResults;
  }
}
