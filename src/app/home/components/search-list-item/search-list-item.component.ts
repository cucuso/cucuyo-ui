import {Component, Input, ViewEncapsulation} from '@angular/core';
import {AdProperties} from '../../../commons/model/ad-properties.model';

@Component({
  selector: 'app-search-list-item',
  templateUrl: './search-list-item.component.html',
  styleUrls: ['./search-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchListItemComponent {

  @Input('item') item: AdProperties;

  constructor() {
  }

}
