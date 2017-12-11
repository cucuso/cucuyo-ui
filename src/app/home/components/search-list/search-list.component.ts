import {Component, Input, ViewEncapsulation} from '@angular/core';
import {AdProperties} from '../../../commons/model/ad-properties.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchListComponent {

  @Input('items') items: Array<AdProperties> = [];

  constructor() {
  }

}
