import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {AdProperties} from '../../../commons/model/ad-properties.model';
import {PageEvent} from '@angular/material';
import {DataPage} from '../../../commons/model/data-page.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchListComponent {

  @Input('pageSize') pageSize;
  @Input('currentPage') currentPage: DataPage<AdProperties>;
  @Output('nextPage') nextPage: EventEmitter<number> = new EventEmitter<number>();
  @Output('previousPage') previousPage: EventEmitter<number> = new EventEmitter<number>();
  currentPageIndex = 0;

  constructor() {
  }

  onPageChange($event: PageEvent) {
    if ($event.pageIndex > this.currentPageIndex) {
      this.nextPage.emit($event.pageIndex);
    } else {
      this.previousPage.emit($event.pageIndex);
    }

    this.currentPageIndex = $event.pageIndex;
  }
}
